# Mini HCM - 阿里云 ACK 部署指南

## 📋 前置条件

1. **阿里云账号** - 已创建 ACK 集群
2. **本地环境**
   - Docker 已安装
   - kubectl 已安装
   - 已配置 ACK 集群连接
3. **阿里云资源**
   - 容器镜像服务（ACR）命名空间
   - ACK 集群访问权限

## 🚀 快速部署（3 分钟）

### 方式一：使用自动化脚本（推荐）

```bash
# 1. 编辑配置变量
vi deploy.sh
# 修改以下变量：
# - REGISTRY_ENDPOINT: 你的 ACR 地域（如 registry.cn-beijing.aliyuncs.com）
# - NAMESPACE: 你的 ACR 命名空间名称

# 2. 执行部署脚本
chmod +x deploy.sh
./deploy.sh
```

### 方式二：手动部署步骤

#### 步骤 1: 登录阿里云 ACR

```bash
docker login --username=<YOUR_USERNAME> registry.cn-beijing.aliyuncs.com
# 输入密码（获取方式：阿里云控制台 -> 容器镜像服务 -> 账号登录 token）
```

#### 步骤 2: ��建 Docker 镜像

```bash
docker build -t mini-hcm:latest -f Dockerfile .
```

#### 步骤 3: 标记镜像

```bash
docker tag mini-hcm:latest registry.cn-beijing.aliyuncs.com/<NAMESPACE>/mini-hcm:latest
```

#### 步骤 4: 推送到阿里云 ACR

```bash
docker push registry.cn-beijing.aliyuncs.com/<NAMESPACE>/mini-hcm:latest
```

#### 步骤 5: 配置 Kubernetes 文件

编辑 `k8s/deployment.yaml`，修改以下内容：

```yaml
image: registry.cn-beijing.aliyuncs.com/<YOUR_NAMESPACE>/mini-hcm:latest
```

编辑 `k8s/pvc.yaml`，根据你的集群存储类修改：

```yaml
storageClassName: alibabacloud.cn-beijing.nas  # 或你的实际存储类
```

查看存储类：
```bash
kubectl get storageclass
```

#### 步骤 6: 部署到 ACK

```bash
# 创建命名空间（可选）
kubectl create namespace hcm

# 应用配置文件
kubectl apply -f k8s/pvc.yaml
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
kubectl apply -f k8s/ingress.yaml  # 可选，用于域名访问
```

#### 步骤 7: 验证部署

```bash
# 查看 Deployment
kubectl get deployment

# 查看 Pods（应该有 2 个 Running）
kubectl get pods -l app=mini-hcm

# 查看 Service（获取外部 IP）
kubectl get svc mini-hcm-service
```

## 🔧 常见操作

### 查看应用日志

```bash
# 查看最新日志
kubectl logs -f deployment/mini-hcm

# 查看特定 Pod 的日志
kubectl logs -f <pod-name>

# 查看历史日志（最后 100 行）
kubectl logs --tail=100 <pod-name>
```

### 进入容器调试

```bash
# 进入容器 shell
kubectl exec -it <pod-name> -- /bin/bash

# 查看数据库
kubectl exec -it <pod-name> -- sqlite3 /app/data/hcm.sqlite3
```

### 查看详细资源状态

```bash
# 查看 Deployment 详情
kubectl describe deployment mini-hcm

# 查看 Pod 详情
kubectl describe pod <pod-name>

# 查看 Service 详情
kubectl describe svc mini-hcm-service
```

### 扩容/缩容

```bash
# 扩展到 3 个副本
kubectl scale deployment mini-hcm --replicas=3

# 缩减到 1 个副本
kubectl scale deployment mini-hcm --replicas=1
```

### 升级镜像版本

```bash
# 构建新版本镜像
docker build -t mini-hcm:v2 -f Dockerfile .
docker tag mini-hcm:v2 registry.cn-beijing.aliyuncs.com/<NAMESPACE>/mini-hcm:v2
docker push registry.cn-beijing.aliyuncs.com/<NAMESPACE>/mini-hcm:v2

# 更新 Deployment
kubectl set image deployment/mini-hcm \
  mini-hcm=registry.cn-beijing.aliyuncs.com/<NAMESPACE>/mini-hcm:v2
```

### 查看 Ingress 信息

```bash
# 查看 Ingress
kubectl get ingress

# 查看 Ingress 详情
kubectl describe ingress mini-hcm-ingress
```

## 📊 监控和故障排查

### 常见问题

| 问题 | 原因 | 解决方案 |
|------|------|--------|
| Pod 无法启动 | 镜像不存在 | 检查镜像是否成功推送到 ACR |
| Pod CrashLoopBackOff | 应用启动失败 | 查看日志：`kubectl logs <pod-name>` |
| 无法连接应用 | Service 类型错误 | 确保 Service 类型为 LoadBalancer |
| 数据丢失 | PVC 配置错误 | 检查 PVC 是否正确挂载 |
| 镜像推送失败 | 认证问题 | 重新登录 ACR |

### 获取外部访问 IP

```bash
# 方式一：通过 Service 获取（LoadBalancer）
kubectl get svc mini-hcm-service
# 复制 EXTERNAL-IP 列的 IP 地址

# 方式二：通过 Ingress 获取（需要配置域名）
kubectl get ingress mini-hcm-ingress
```

访问应用：
```
http://<EXTERNAL-IP>
```

### 性能优化

1. **增加副本数**
   ```bash
   kubectl scale deployment mini-hcm --replicas=3
   ```

2. **调整资源限制**
   编辑 `k8s/deployment.yaml` 中的 `resources` 部分

3. **启用自��扩展（可选）**
   ```bash
   kubectl autoscale deployment mini-hcm --min=2 --max=5 --cpu-percent=80
   ```

## 📈 生产环境建议

1. **数据库迁移** - 建议迁移到 RDS MySQL 或 PostgreSQL
2. **HTTPS** - 配置 SSL 证书和 Ingress TLS
3. **日志收集** - 集成阿里云日志服务
4. **监控告警** - 配置 Prometheus 和 Grafana
5. **备份策略** - 定期备份数据库
6. **灾难恢复** - 配置多区域部署

## 📚 有用的命令速查表

```bash
# 集群信息
kubectl cluster-info
kubectl get nodes
kubectl get namespaces

# 应用管理
kubectl apply -f <file>           # 部署
kubectl delete -f <file>          # 删除
kubectl rollout restart deployment/mini-hcm  # 重启
kubectl rollout undo deployment/mini-hcm     # 回滚

# 资源查询
kubectl get pods/svc/deployment/ingress
kubectl describe pod <pod-name>
kubectl logs <pod-name>
kubectl exec -it <pod-name> -- <command>

# 文件操作
kubectl cp <pod>:<path> <local-path>  # 从容器复制文件
kubectl cp <local-path> <pod>:<path>  # 复制文件到容器
```

## 🆘 需要帮助？

如有问题，请检查：
1. Kubernetes 集群连接状态
2. ACR 镜像推送日志
3. Pod 详细日志
4. 集群存储类配置

---

**最后更新**: 2026-06-29
