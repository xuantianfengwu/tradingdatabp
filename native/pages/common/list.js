Page({
  data: {
    title: '',
    viewType: 'card',
    items: [],
    loading: true
  },

  onLoad: function(options) {
    const { module, category, subtype } = options;
    this.loadCategoryData(module, category, subtype);
  },

  loadCategoryData: function(module, category, subtype) {
    const COS_BASE_URL = 'https://astockdata-1256438093.cos.ap-shanghai.myqcloud.com/databp_miniprogram/data';
    const url = `${COS_BASE_URL}/${module}/categories.json`;
    
    wx.showLoading({
      title: '加载中...'
    });

    wx.request({
      url: url,
      method: 'GET',
      success: (res) => {
        wx.hideLoading();
        if (res.data && res.data[category] && res.data[category][subtype]) {
          const moduleMap = {
            'trading_data': '交易数据',
            'trading_strategy': '交易策略',
            'trading_tools': '交易工具'
          };

          const titleMap = {
            'items': '',
            'communities': '策略社区',
            'officialAccounts': '推荐公众号',
            'research': '策略研究',
            'news': '资讯类',
            'backtest': '回测类',
            'trading': '交易类'
          };

          const viewTypeMap = {
            'items': 'card',
            'communities': 'card',
            'officialAccounts': 'wechat',
            'research': 'research',
            'news': 'card',
            'backtest': 'card',
            'trading': 'card'
          };

          const moduleName = moduleMap[module] || '';
          const categoryName = res.data[category].name || '';
          const subTypeName = titleMap[subtype] || '';

          let title = '';
          if (moduleName && categoryName && subTypeName) {
            title = `${moduleName} - ${categoryName} - ${subTypeName}`;
          } else if (moduleName && categoryName) {
            title = `${moduleName} - ${categoryName}`;
          } else {
            title = categoryName || moduleName;
          }
          
          this.setData({
            title: title,
            viewType: viewTypeMap[subtype] || 'card',
            items: res.data[category][subtype],
            loading: false,
            module: module
          });
        } else {
          wx.showToast({
            title: '数据加载失败',
            icon: 'none'
          });
        }
      },
      fail: (err) => {
        wx.hideLoading();
        console.error('Failed to load category data:', err);
        wx.showToast({
          title: '加载失败',
          icon: 'none'
        });
      }
    });
  },

  goToDetail: function(e) {
    const source = e.currentTarget.dataset.source;
    const module = this.data.module;
    wx.navigateTo({
      url: `/pages/detail/detail?module=${module}&id=${source.id}`
    });
  },

  openLink: function(e) {
    const url = e.currentTarget.dataset.url;
    wx.setClipboardData({
      data: url,
      success: function() {
        wx.showToast({
          title: '链接已复制',
          icon: 'success'
        });
      }
    });
  },

  onShareAppMessage: function() {
    return {
      title: `璇天凤舞的数据助手 - ${this.data.title}`,
      path: `/pages/common/list?module=${this.options.module}&category=${this.options.category}&subtype=${this.options.subtype}`
    };
  }
});