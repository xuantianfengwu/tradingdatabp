# 璇天凤舞的数据助手 - 原生小程序

## 项目说明

已重构为**原生微信小程序**，不再依赖 Taro 框架。

## 项目结构

```
native/
├── app.js              # 小程序入口
├── app.json            # 全局配置（TabBar、窗口等）
├── app.wxss            # 全局样式
├── project.config.json # 项目配置
├── data/               # 数据文件
│   └── shangzheng_index.csv  # 上证指数历史数据
├── images/             # TabBar图标
│   ├── home.png
│   ├── home-active.png
│   ├── report.png
│   ├── report-active.png
│   ├── tool.png
│   └── tool-active.png
└── pages/              # 页面
    ├── index/          # 首页
    ├── reportlist/     # 券商研报
    └── tools/          # 行情工具
```

## 页面功能

### 1. 首页 (pages/index/)
- 产品介绍
- 核心功能展示
- 快速入口按钮

### 2. 券商研报 (pages/reportlist/)
- 研报列表展示
- 作者、日期、摘要信息

### 3. 行情工具 (pages/tools/)
- 上证指数实时行情展示
- K线图（Canvas绘制）
- 今日行情数据
- 近期行情列表
- 更多工具入口

## 运行方式

### 微信开发者工具
1. 打开微信开发者工具
2. 点击"导入项目"
3. 选择 `native` 目录
4. AppID: `wx3a605a2fc8e7036f`
5. 点击"确认"

## 技术特点

- **原生开发**：使用微信小程序原生语法，无框架依赖
- **轻量高效**：文件结构简单，编译快速
- **数据独立**：CSV数据文件独立，便于更新维护
- **模块清晰**：每个页面独立目录，便于管理

## 未来扩展

如需添加K线图交互功能，可以在 `pages/tools/tools.js` 中扩展 Canvas 绑定事件。

---

*重构时间：2026-04-23*
