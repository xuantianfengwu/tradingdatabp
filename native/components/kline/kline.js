Component({
  properties: {
    data: {
      type: Array,
      value: [],
      observer: function(newVal) {
        if (newVal && newVal.length > 0) {
          this.klineData = newVal;
          // 延迟绘制，等待组件准备好
          setTimeout(() => {
            this.drawChart();
          }, 100);
        }
      }
    }
  },

  data: {
    windowWidth: 0,
    currentIndex: -1
  },

  attached: function() {
    const systemInfo = wx.getSystemInfoSync();
    this.setData({
      windowWidth: systemInfo.windowWidth
    });
  },

  methods: {
    drawChart: function() {
      const data = this.properties.data;
      if (!data || data.length === 0) return;
      
      const ctx = wx.createCanvasContext('kline', this);
      const windowWidth = this.data.windowWidth;
      const chartWidth = windowWidth;
      const chartHeight = 400;
      const klineHeight = 300;
      const volumeHeight = 100;
      const padding = { left: 50, right: 20, top: 20, bottom: 20 };
      
      // 计算最大最小值
      let minPrice = Infinity, maxPrice = -Infinity, maxVolume = 0;
      data.forEach(item => {
        minPrice = Math.min(minPrice, item.low);
        maxPrice = Math.max(maxPrice, item.high);
        maxVolume = Math.max(maxVolume, item.volume);
      });
      
      const priceRange = maxPrice - minPrice;
      
      // 绘制背景
      ctx.setFillStyle('#ffffff');
      ctx.fillRect(0, 0, chartWidth, chartHeight);
      
      // 绘制网格线
      ctx.setStrokeStyle('#f3f3f3');
      ctx.setLineWidth(1);
      for (let i = 0; i <= 4; i++) {
        const y = padding.top + i * (klineHeight - padding.top - padding.bottom) / 4;
        ctx.beginPath();
        ctx.moveTo(padding.left, y);
        ctx.lineTo(chartWidth - padding.right, y);
        ctx.stroke();
        
        // 价格标签
        const price = maxPrice - i * priceRange / 4;
        ctx.setFillStyle('#999');
        ctx.setFontSize(10);
        ctx.setTextAlign('right');
        ctx.fillText(price.toFixed(1), padding.left - 5, y + 4);
      }
      
      // 计算每个K线的宽度
      const visibleCount = Math.min(60, data.length);
      const barWidth = Math.max(3, (chartWidth - padding.left - padding.right) / visibleCount - 2);
      const barSpacing = (chartWidth - padding.left - padding.right) / visibleCount;
      const startIndex = Math.max(0, data.length - visibleCount);
      
      // 绘制K线
      for (let i = 0; i < visibleCount; i++) {
        const item = data[startIndex + i];
        const x = padding.left + i * barSpacing + barSpacing / 2;
        const isUp = item.close >= item.open;
        
        const getY = (price) => padding.top + (klineHeight - padding.top - padding.bottom) - 
                          ((price - minPrice) / priceRange) * (klineHeight - padding.top - padding.bottom);
        
        const yOpen = getY(item.open);
        const yClose = getY(item.close);
        const yLow = getY(item.low);
        const yHigh = getY(item.high);
        
        ctx.setFillStyle(isUp ? '#ef5350' : '#26a69a');
        ctx.setStrokeStyle(isUp ? '#ef5350' : '#26a69a');
        
        // 绘制上下影线
        ctx.beginPath();
        ctx.moveTo(x, yLow);
        ctx.lineTo(x, yHigh);
        ctx.setLineWidth(1);
        ctx.stroke();
        
        // 绘制实体
        const bodyTop = Math.min(yOpen, yClose);
        const bodyHeight = Math.max(Math.abs(yOpen - yClose), 1);
        ctx.fillRect(x - barWidth / 2, bodyTop, barWidth, bodyHeight);
      }
      
      // 绘制分割线
      ctx.setStrokeStyle('#e0e0e0');
      ctx.setLineWidth(1);
      ctx.beginPath();
      ctx.moveTo(padding.left, klineHeight);
      ctx.lineTo(chartWidth - padding.right, klineHeight);
      ctx.stroke();
      
      // 绘制成交量
      for (let i = 0; i < visibleCount; i++) {
        const item = data[startIndex + i];
        const x = padding.left + i * barSpacing + barSpacing / 2;
        const isUp = item.close >= item.open;
        
        const volumeBarHeight = (item.volume / maxVolume) * (volumeHeight - 40);
        const y = klineHeight + 20;
        
        ctx.setFillStyle(isUp ? '#ef5350' : '#26a69a');
        ctx.fillRect(x - barWidth / 2, y + (volumeHeight - 40 - volumeBarHeight), barWidth, volumeBarHeight);
      }
      
      // 绘制日期标签
      ctx.setFillStyle('#999');
      ctx.setFontSize(10);
      ctx.setTextAlign('center');
      
      const labelCount = 4;
      for (let i = 0; i <= labelCount; i++) {
        const index = startIndex + Math.floor(i * (visibleCount - 1) / labelCount);
        const x = padding.left + (i / labelCount) * (chartWidth - padding.left - padding.right);
        const dateStr = data[index].date.slice(5);
        ctx.fillText(dateStr, x, chartHeight - 5);
      }
      
      // 绘制边框
      ctx.setStrokeStyle('#e0e0e0');
      ctx.setLineWidth(1);
      ctx.strokeRect(padding.left, padding.top, chartWidth - padding.left - padding.right, klineHeight - padding.top - padding.bottom);
      ctx.strokeRect(padding.left, klineHeight + 15, chartWidth - padding.left - padding.right, volumeHeight - 30);
      
      ctx.draw();
    },

    onTouchStart: function(e) {
      // 点击交互，后续扩展
    }
  }
})
