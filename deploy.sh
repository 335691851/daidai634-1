#!/bin/bash

# Mini HCM - 阿里云 ACK 部署脚本

set -e

# 配置变量
REGISTRY_ENDPOINT="registry.cn-beijing.aliyuncs.com"  # 修改为你的 ACR 地域
NAMESPACE="YOUR_NAMESPACE"  # 修改为你的 ACR 命名空间
REPO_NAME="mini-hcm"
IMAGE_TAG="latest"
KUBE_NAMESPACE="default"  # Kubernetes 命名空间

# 完整镜像名称
FULL_IMAGE="${REGISTRY_ENDPOINT}/${NAMESPACE}/${REPO_NAME}:${IMAGE_TAG}"

echo "=========================================="
echo "Mini HCM - 阿里云 ACK 部署工具"
echo "=========================================="
echo ""

# 步骤 1: 构建 Docker 镜像
echo "📦 [步骤 1/5] 构建 Docker 镜像..."
docker build -t ${REPO_NAME}:${IMAGE_TAG} -f Dockerfile .
echo "✅ Docker 镜像构建完成！"
echo ""

# 步骤 2: 标记镜像
echo "🏷️  [步骤 2/5] 标记镜像..."
docker tag ${REPO_NAME}:${IMAGE_TAG} ${FULL_IMAGE}
echo "✅ 镜像标签: ${FULL_IMAGE}"
echo ""

# 步骤 3: 推送到阿里云 ACR
echo "🚀 [步骤 3/5] 推送镜像到阿里云 ACR..."
echo "请确保已登录 ACR: docker login --username=<USERNAME> ${REGISTRY_ENDPOINT}"
docker push ${FULL_IMAGE}
echo "✅ 镜像推送完成！"
echo ""

# 步骤 4: 部署到 Kubernetes
echo "⚙️  [步骤 4/5] 部署到 Kubernetes..."

# 检查 kubectl 连接
if ! kubectl cluster-info &> /dev/null; then
    echo "❌ 错误: 无法连接到 Kubernetes 集群！"
    echo "请先配置 kubectl: kubectl config use-context <context-name>"
    exit 1
fi

# 创建 Kubernetes 命名空间（如果不存在）
kubectl create namespace ${KUBE_NAMESPACE} --dry-run=client -o yaml | kubectl apply -f -

# 应用 PVC
echo "  - 创建持久化存储..."
kubectl apply -f k8s/pvc.yaml

# 应用 Deployment
echo "  - 部署应用..."
kubectl apply -f k8s/deployment.yaml

# 应用 Service
echo "  - 创建服务..."
kubectl apply -f k8s/service.yaml

# 应用 Ingress（可选）
echo "  - 创建 Ingress（可选）..."
kubectl apply -f k8s/ingress.yaml

echo "✅ Kubernetes 部署完成！"
echo ""

# 步骤 5: 显示部署状态
echo "📊 [步骤 5/5] 显示部署状态..."
echo ""
echo "Deployment 状态:"
kubectl get deployment mini-hcm -n ${KUBE_NAMESPACE}
echo ""
echo "Pods 状态:"
kubectl get pods -l app=mini-hcm -n ${KUBE_NAMESPACE}
echo ""
echo "Service 状态:"
kubectl get svc mini-hcm-service -n ${KUBE_NAMESPACE}
echo ""

# 等待服务就绪
echo "⏳ 等待服务就绪（最多 60 秒）..."
kubectl rollout status deployment/mini-hcm -n ${KUBE_NAMESPACE} --timeout=60s

echo ""
echo "=========================================="
echo "✅ 部署完成！"
echo "=========================================="
echo ""
echo "获取外部 IP:"
echo "  kubectl get svc mini-hcm-service -n ${KUBE_NAMESPACE}"
echo ""
echo "查看日志:"
echo "  kubectl logs -f deployment/mini-hcm -n ${KUBE_NAMESPACE}"
echo ""
echo "进入容器调试:"
echo "  kubectl exec -it <pod-name> -n ${KUBE_NAMESPACE} -- /bin/bash"
echo ""
