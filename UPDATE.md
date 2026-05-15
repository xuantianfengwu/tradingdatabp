# 璇天凤舞的数据助手 - 更新说明

## 更新内容概述

本次完成了小程序的三大更新：

1. ✅ Tab栏重命名和图标配置
2. ✅ 行情工具页面K线图展示
3. ✅ 数据API模块化

---

## 一、Tab栏更新 (src/app.config.ts)

### 修改内容
- **第三个Tab**：从"提效工具" 改为 "行情工具"
- **Tab图标**：已配置图标路径（需用户提供图片文件）
- **App标题**：从"WeChat" 改为 "璇天凤舞的数据助手"
- **选中颜色**：调整为更美观的 #FF6B35

### 所需图标文件 (放在 src/assets/images/)
```
home.png              (首页未选中)
home-active.png       (首页选中)
report.png            (券商研报未选中)
report-active.png     (券商研报选中)
tool.png              (行情工具未选中)
tool-active.png       (行情工具选中)
```

图标规格：81px × 81px，PNG格式

---

## 二、行情工具页面 (src/pages/tools/)

### 新增功能
1. **上证指数K线图**
   - 使用Canvas 2D API绘制
   - 支持涨跌颜色区分（红涨绿跌）
   - 包含网格线和价格、日期标签
   
2. **价格展示区**
   - 当前价格
   - 涨跌点
   - 涨跌幅

3. **更多工具入口**
   - 行情看板
   - 策略回测
   - 个股分析
   - 指标计算

### 文件结构
```
tools/
├── tools.tsx          (主页面，使用Function Component + Hooks)
├── tools.scss         (页面样式)
├── tools.config.ts    (页面配置，标题已改为"行情工具")
├── joke.tsx           (保留原有笑话页面)
└── joke.config.ts
```

---

## 三、数据API (src/api/market.ts)

### 核心功能
1. **KLineData接口**：定义数据结构
   - 兼容CSV格式 (date, open, high, low, close, volume, change_pct)

2. **getShangzhengIndexData()**
   - 当前版本：模拟数据（与CSV格式一致）
   - 生成2024-04-23至2026-04-23的K线数据

3. **getMarketDataFromCOS()**
   - 预留接口，便于未来对接腾讯COS

4. **formatDataForECharts()**
   - 数据格式转换工具

### 数据结构
```typescript
interface KLineData {
  date: string;        // YYYY-MM-DD
  open: number;        // 开盘价
  high: number;        // 最高价
  low: number;         // 最低价
  close: number;       // 收盘价
  volume: number;      // 成交量
  change_pct: number;  // 涨跌幅
}
```

---

## 四、项目文件清单

### 新增文件
| 文件路径 | 说明 |
|---------|------|
| src/api/market.ts | 行情数据API |
| src/components/KLineChart.tsx | K线图组件（备用） |
| src/pages/tools/tools.scss | 行情工具页面样式 |
| src/assets/images/README.md | 图标说明文档 |
| data/generate_sh_data.py | 数据生成脚本 |
| data/shangzheng_index.csv | 上证指数CSV数据 |

### 修改文件
| 文件路径 | 修改内容 |
|---------|---------|
| src/app.config.ts | Tab栏配置、标题、图标 |
| src/pages/tools/tools.tsx | 完全重写，添加K线图 |
| src/pages/tools/tools.config.ts | 标题改为"行情工具" |
| src/pages/index/index.tsx | 按钮文字更新 |
| package.json | 新增echarts依赖 |

---

## 五、未来对接腾讯COS

### 步骤
1. 准备同构CSV文件（保持现有数据结构）
2. 将CSV上传到腾讯COS
3. 修改 `src/api/market.ts` 中的 `getMarketDataFromCOS()` 函数
4. 替换页面中的数据源调用

### 兼容性说明
由于当前数据结构已与CSV保持一致，对接时只需更换数据获取方式即可，无需修改图表绘制逻辑。

---

## 六、运行项目

```bash
npm run dev:weapp     # 微信小程序开发模式
npm run build:weapp   # 微信小程序构建
```

---

## 七、注意事项

⚠️ **重要**：
1. Tab图标需要用户自行准备并放入 `src/assets/images/` 目录
2. 若图片缺失，小程序仍可正常运行，Tab栏只显示文字
3. 当前K线数据为模拟数据，真实数据可通过CSV或COS提供
