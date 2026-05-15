Page({
  data: {
    currentIndex: 0,
    categories: [
      {
        id: 'stock',
        name: '股票',
        icon: '📈',
        communities: [
          {
            id: 'joinquant',
            name: '聚宽社区',
            description: '国内最大的量化社区，支持策略回测和实盘交易。',
            tags: ['量化', '社区', '回测', 'A股'],
            url: 'https://www.joinquant.com/community'
          },
          {
            id: 'guorn',
            name: '果仁网',
            description: '策略回测和优化工具，适合量化初学者。',
            tags: ['量化', '回测', '初学者', '策略'],
            url: 'https://guorn.com/'
          },
          {
            id: 'juejin',
            name: '掘金量化社区',
            description: '量化策略分享和实盘交易服务平台。',
            tags: ['量化', '社区', '实盘', '策略'],
            url: 'https://www.myquant.cn/'
          }
        ],
        wechats: [
          { id: 'trader_say', name: '交易员说', description: '交易策略与市场分析' },
          { id: 'renren_quant', name: '人人宽客', description: '量化投资入门与进阶' },
          { id: 'bigquant', name: 'BigQuant量化', description: 'AI量化策略研究' },
          { id: 'quant_ml', name: '量化投资与机器学习', description: '前沿量化技术分享' }
        ],
        research: [
          { id: 'citics', name: '中信证券', description: '宏观策略与配置研究' },
          { id: 'htsc', name: '华泰证券', description: '多因子Alpha与Smart Beta' },
          { id: 'gtja', name: '国泰君安', description: '策略择时与行业轮动' },
          { id: 'haitong', name: '海通证券', description: '量化选股与指数增强' }
        ]
      },
      {
        id: 'futures',
        name: '期货',
        icon: '📊',
        communities: [
          {
            id: 'hexun_futures_forum',
            name: '和讯期货论坛',
            description: '期货投资者交流社区，提供行情讨论。',
            tags: ['期货', '社区', '交流', '论坛'],
            url: 'http://futures.hexun.com/'
          },
          {
            id: 'vnpy',
            name: 'VN.PY',
            description: '国内知名量化交易框架，支持期货实盘。',
            tags: ['期货', '量化', '框架', '实盘'],
            url: 'https://www.vnpy.com/'
          }
        ],
        wechats: [
          { id: 'futures_daily', name: '期货日报', description: '期货市场资讯' },
          { id: 'quant_trading', name: '量化投资与交易', description: '期货量化策略' },
          { id: 'trading_famen', name: '交易法门', description: '期货交易技巧' },
          { id: 'hedge_research', name: '对冲研投', description: '衍生品策略研究' }
        ],
        research: [
          { id: 'yong_an', name: '永安期货', description: '黑色系产业链研究' },
          { id: 'citics_futures', name: '中信期货', description: '股指与国债期货策略' },
          { id: 'gtja_futures', name: '国泰君安期货', description: '衍生品定价与套利' },
          { id: 'founder', name: '方正中期期货', description: '农产品供需平衡表' }
        ]
      },
      {
        id: 'forex',
        name: '外汇',
        icon: '💱',
        communities: [
          {
            id: 'forex_factory',
            name: 'Forex Factory',
            description: '全球最大的外汇交易社区，提供实时行情、经济日历和交易策略讨论。',
            tags: ['外汇', '社区', '经济日历', '策略'],
            url: 'https://www.forexfactory.com/'
          },
          {
            id: 'babypips',
            name: 'BabyPips',
            description: '外汇交易学习社区，提供从入门到进阶的完整学习资源。',
            tags: ['外汇', '学习', '教程', '社区'],
            url: 'https://www.babypips.com/'
          }
        ],
        wechats: [
          { id: 'forex_168', name: 'FX168财经', description: '外汇市场资讯' },
          { id: 'dailyfx_cn', name: 'DailyFX中文', description: '外汇技术分析' },
          { id: 'fxstreet_cn', name: 'FXStreet中文', description: '外汇新闻与策略' },
          { id: 'investing_cn', name: 'Investing中文', description: '全球财经资讯' }
        ],
        research: [
          { id: 'jpmorgan', name: '摩根大通', description: '外汇策略研究' },
          { id: 'goldman', name: '高盛', description: '全球外汇分析' },
          { id: 'ubs', name: '瑞银', description: 'G10货币策略' },
          { id: 'deutsche', name: '德意志银行', description: '外汇衍生品研究' }
        ]
      },
      {
        id: 'crypto',
        name: '数字货币',
        icon: '🪙',
        communities: [
          {
            id: 'ccxt_community',
            name: 'CCXT社区',
            description: '统一加密货币交易所API，支持100+交易所。',
            tags: ['加密货币', 'API', '开源', '社区'],
            url: 'https://github.com/ccxt/ccxt'
          },
          {
            id: 'tradingview',
            name: 'TradingView社区',
            description: '专业图表分析和策略回测平台。',
            tags: ['图表', '分析', '回测', '社区'],
            url: 'https://www.tradingview.com/'
          }
        ],
        wechats: [
          { id: 'coin_hub', name: '币圈黄埔军校', description: '加密货币投资分析' },
          { id: 'blockchain_researcher', name: '区块链研究员', description: '区块链技术分析' },
          { id: 'quant_crypto', name: '量化炒币', description: '加密货币量化策略' },
          { id: 'coindesk_cn', name: 'CoinDesk中文', description: '全球加密货币资讯' }
        ],
        research: [
          { id: 'coingecko', name: 'CoinGecko', description: '加密货币数据分析' },
          { id: 'messari', name: 'Messari', description: '加密资产评级报告' },
          { id: 'glassnode', name: 'Glassnode', description: '链上数据分析' },
          { id: 'tokeninsight', name: 'TokenInsight', description: '代币评级报告' }
        ]
      }
    ]
  },

  onLoad: function() {
    console.log('交易策略页面加载');
  },

  switchTab: function(e) {
    const index = parseInt(e.currentTarget.dataset.index);
    this.setData({
      currentIndex: index
    });
  },

  onSwiperChange: function(e) {
    const index = e.detail.current;
    this.setData({
      currentIndex: index
    });
  },

  goToDetail: function(e) {
    const source = e.currentTarget.dataset.source;
    wx.navigateTo({
      url: `/pages/detail/detail?module=trading_strategy&id=${source.id}`
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

  viewAll: function(e) {
    const categoryId = e.currentTarget.dataset.category;
    const subType = e.currentTarget.dataset.subtype;
    wx.navigateTo({
      url: `/pages/common/list?module=trading_strategy&category=${categoryId}&subtype=${subType}`
    });
  },

  onShareAppMessage: function() {
    return {
      title: '璇天凤舞的数据助手 - 交易策略',
      path: '/pages/strategy/strategy',
      imageUrl: ''
    };
  }
});