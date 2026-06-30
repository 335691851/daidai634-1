FROM python:3.11-slim

WORKDIR /app

# 复制项目文件
COPY . .

# 暴露端口
EXPOSE 8000

# 非 root 用户运行（安全最佳实践）
RUN useradd -m -u 1000 appuser && chown -R appuser:appuser /app
USER appuser

# 启动应用，绑定到 0.0.0.0 以便 Kubernetes 可以访问
CMD ["python", "server.py", "8000"]
