# FlowCRM 静态网页项目实例

这是一个可以直接发布到 GitHub Pages 的 CRM 单页网页项目。项目不需要后端、不需要数据库、不需要安装依赖，推送到 GitHub 后会通过 GitHub Actions 自动发布。

## 项目效果

- 客户增长工作台
- 客户档案表格
- 商机阶段看板
- 客户搜索和阶段筛选
- 新增客户并保存到浏览器 localStorage
- GitHub Pages 自动部署

## 本地运行

在项目根目录执行：

```powershell
python -m http.server 8000 --directory static
```

浏览器打开：

```text
http://127.0.0.1:8000
```

## Git 到 GitHub 发布流程

确认当前文件：

```powershell
git status
```

提交代码：

```powershell
git add .
git commit -m "Create static CRM GitHub Pages demo"
```

推送到 GitHub：

```powershell
git push origin master
```

推送后进入 GitHub 仓库：

```text
https://github.com/335691851/daidai634-1
```

打开仓库的 `Actions` 页面，等待 `Deploy static CRM to GitHub Pages` 运行成功。

## 第一次启用 GitHub Pages

如果仓库还没有启用 Pages：

1. 打开 GitHub 仓库的 `Settings`
2. 进入 `Pages`
3. 在 `Build and deployment` 中把 `Source` 选择为 `GitHub Actions`
4. 回到 `Actions`，重新运行 `Deploy static CRM to GitHub Pages`

发布成功后，GitHub 会生成一个 Pages 地址，通常类似：

```text
https://335691851.github.io/daidai634-1/
```

## 项目结构

```text
static/
  index.html       # 页面结构
  styles.css       # 页面样式
  app.js           # CRM 交互和本地数据
  .nojekyll        # 关闭 Jekyll 处理
.github/workflows/
  pages.yml        # GitHub Pages 自动发布工作流
README.md          # 操作说明
```

## 修改后再次发布

以后每次改完网页，只需要：

```powershell
git add .
git commit -m "Update CRM page"
git push origin master
```

GitHub Actions 会自动重新发布最新页面。
