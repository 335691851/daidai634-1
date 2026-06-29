# Mini HCM

一个最小可运行的企业 HCM 核心系统原型，覆盖人员主数据管理、绩效周期和人员绩效考评管理。

## 功能

- 员工主数据：新增、编辑、搜索、按部门/状态筛选、标记离职
- 绩效周期：新增周期、按周期筛选考评记录
- 绩效考评：按员工和周期录入目标达成、能力表现、价值观评分，自动计算总分和等级
- 数据存储：SQLite，本地数据库文件位于 `data/hcm.sqlite3`

## 运行

```powershell
python server.py 8000
```

打开：

```text
http://127.0.0.1:8000
```

## 项目结构

```text
server.py          # Python 标准库后端、REST API、SQLite 初始化
static/index.html  # 单页应用页面
static/styles.css  # 界面样式
static/app.js      # 前端交互和 API 调用
data/              # 运行后生成 SQLite 数据库
```

## API 概览

- `GET /api/summary`
- `GET /api/employees`
- `POST /api/employees`
- `GET /api/employees/{id}`
- `PUT /api/employees/{id}`
- `DELETE /api/employees/{id}`
- `GET /api/cycles`
- `POST /api/cycles`
- `GET /api/reviews`
- `POST /api/reviews`
- `PUT /api/reviews/{id}`
