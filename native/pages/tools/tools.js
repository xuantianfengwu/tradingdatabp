Page({
  data: {
    currentIndex: 0,
    categories: [
      {
        id: 'stock',
        name: '股票',
        icon: '📈',
        news: [
          {
            id: 'eastmoney',
            name: '东方财富网',
            description: '国内领先的财经资讯平台，提供实时股票行情、财经新闻和股吧社区。',
            tags: ['资讯', '股票', '行情', '新闻'],
            url: 'https://www.eastmoney.com/'
          },
          {
            id: 'xueqiu',
            name: '雪球',
            description: '投资者社区，提供股票讨论、组合管理和投资分享功能。',
            tags: ['社区', '股票', '投资', '组合'],
            url: 'https://xueqiu.com/'
          },
          {
            id: 'wind',
            name: 'Wind资讯',
            description: '专业金融数据和资讯平台，机构级财经信息服务。',
            tags: ['专业', '机构', '数据', '资讯'],
            url: 'https://www.wind.com.cn/'
          }
        ],
        backtest: [
          {
            id: 'joinquant',
            name: '聚宽量化',
            description: '国内量化平台，提供A股、港股、美股数据，支持策略回测和实盘交易。',
            tags: ['量化', '回测', '实盘', 'A股'],
            url: 'https://www.joinquant.com/'
          },
          {
            id: 'guorn',
            name: '果仁网',
            description: '提供策略回测和优化工具，适合量化初学者，可视化操作。',
            tags: ['量化', '回测', '初学者', '策略'],
            url: 'https://guorn.com/'
          },
          {
            id: 'backtrader',
            name: 'Backtrader',
            description: 'Python回测框架，支持多种数据源和策略类型，灵活扩展。',
            tags: ['回测', 'Python', '框架', '策略'],
            url: 'https://www.backtrader.com/'
          }
        ],
        trading: [
          {
            id: 'tonghuashun',
            name: '同花顺',
            description: '国内知名股票交易软件，提供实时行情、技术分析和交易下单。',
            tags: ['交易', '股票', '行情', '分析'],
            url: 'https://www.10jqka.com.cn/'
          },
          {
            id: 'zhangle',
            name: '涨乐财富通',
            description: '华泰证券官方交易软件，支持A股、基金等多种交易服务。',
            tags: ['券商', '交易', '股票', '基金'],
            url: 'https://www.htsc.com.cn/'
          },
          {
            id: 'guangfa',
            name: '广发易淘金',
            description: '广发证券官方交易软件，提供智能投顾和专业行情分析。',
            tags: ['券商', '交易', '智能投顾', '分析'],
            url: 'https://www.gf.com.cn/'
          }
        ]
      },
      {
        id: 'futures',
        name: '期货',
        icon: '📊',
        news: [
          {
            id: 'hexun_futures',
            name: '和讯期货',
            description: '专业期货资讯平台，提供期货行情、分析报告和持仓数据。',
            tags: ['期货', '资讯', '分析', '持仓'],
            url: 'http://futures.hexun.com/'
          },
          {
            id: 'futures_daily',
            name: '期货日报',
            description: '国内权威期货行业媒体，提供专业期货资讯和分析报告。',
            tags: ['期货', '资讯', '媒体', '日报'],
            url: 'http://www.qhrb.com.cn/'
          },
          {
            id: 'cftc',
            name: 'CFTC报告',
            description: '美国商品期货交易委员会周报，跟踪期货市场持仓变化。',
            tags: ['期货', '数据', '持仓', '监管'],
            url: 'https://www.cftc.gov/'
          }
        ],
        backtest: [
          {
            id: 'vnpy',
            name: 'VN.PY',
            description: '国内知名量化交易框架，专注于期货市场的量化交易和策略回测。',
            tags: ['期货', '量化', '框架', '实盘'],
            url: 'https://www.vnpy.com/'
          },
          {
            id: 'quantconnect',
            name: 'QuantConnect',
            description: '云端量化平台，支持期货策略回测和实盘交易。',
            tags: ['回测', '云端', '期货', '实盘'],
            url: 'https://www.quantconnect.com/'
          },
          {
            id: 'vectorbt',
            name: 'VectorBT',
            description: '高性能Python回测库，支持期货策略回测和优化。',
            tags: ['回测', 'Python', '高性能', '期货'],
            url: 'https://github.com/polakowo/vectorbt'
          }
        ],
        trading: [
          {
            id: 'ctp',
            name: 'CTP交易接口',
            description: '国内期货市场标准交易接口，支持所有期货公司接入。',
            tags: ['期货', '交易接口', 'CTP', 'API'],
            url: 'https://www.sfit.com.cn/'
          },
          {
            id: 'yong_an_app',
            name: '永安期货APP',
            description: '永安期货官方交易软件，支持国内所有期货品种交易。',
            tags: ['期货', '交易', '永安', 'APP'],
            url: 'https://www.yafco.com/'
          },
          {
            id: 'citics_futures_app',
            name: '中信期货APP',
            description: '中信期货官方交易软件，提供专业期货交易服务。',
            tags: ['期货', '交易', '中信', 'APP'],
            url: 'https://www.citicsf.com/'
          }
        ]
      },
      {
        id: 'forex',
        name: '外汇',
        icon: '💱',
        news: [
          {
            id: 'investing_com',
            name: 'Investing.com',
            description: '全球领先的金融数据平台，提供实时外汇汇率、经济数据和财经新闻。',
            tags: ['外汇', '实时行情', '全球市场', '财经新闻'],
            url: 'https://www.investing.com/'
          },
          {
            id: 'fx168',
            name: 'FX168财经网',
            description: '专业的外汇资讯平台，提供实时行情、财经新闻和市场分析。',
            tags: ['外汇', '资讯', '行情', '分析'],
            url: 'https://www.fx168.com/'
          },
          {
            id: 'dailyfx',
            name: 'DailyFX',
            description: '专业的外汇技术分析平台，提供每日市场分析和交易策略。',
            tags: ['外汇', '技术分析', '策略', '资讯'],
            url: 'https://www.dailyfx.com/'
          }
        ],
        backtest: [
          {
            id: 'metatrader',
            name: 'MetaTrader',
            description: '全球最流行的外汇交易平台，支持策略回测和自动交易。',
            tags: ['外汇', '交易', '平台', 'MT4'],
            url: 'https://www.metatrader4.com/'
          },
          {
            id: 'forex_backtest',
            name: 'Forex Tester',
            description: '专业的外汇策略回测软件，支持历史数据回测和策略优化。',
            tags: ['外汇', '回测', '软件', '策略'],
            url: 'https://www.forextester.com/'
          },
          {
            id: 'ninjatrader',
            name: 'NinjaTrader',
            description: '专业的外汇和期货交易平台，支持策略开发和自动化交易。',
            tags: ['外汇', '期货', '交易', '平台'],
            url: 'https://ninjatrader.com/'
          }
        ],
        trading: [
          {
            id: 'icmarkets',
            name: 'IC Markets',
            description: '全球领先的外汇经纪商，提供低延迟交易和专业服务。',
            tags: ['外汇', '经纪商', '交易', 'ECN'],
            url: 'https://www.icmarkets.com/'
          },
          {
            id: 'xm',
            name: 'XM',
            description: '全球知名外汇经纪商，提供多种交易账户和优质服务。',
            tags: ['外汇', '经纪商', '交易', 'STP'],
            url: 'https://www.xm.com/'
          },
          {
            id: 'fxpro',
            name: 'FXPro',
            description: '专业的外汇交易平台，提供ECN执行和透明定价。',
            tags: ['外汇', '经纪商', '交易', 'ECN'],
            url: 'https://www.fxpro.com/'
          }
        ]
      },
      {
        id: 'crypto',
        name: '数字货币',
        icon: '🪙',
        news: [
          {
            id: 'coindesk',
            name: 'CoinDesk',
            description: '全球知名加密货币新闻媒体，提供专业区块链资讯。',
            tags: ['加密货币', '新闻', '媒体', '区块链'],
            url: 'https://www.coindesk.com/'
          },
          {
            id: 'coingecko',
            name: 'CoinGecko',
            description: '加密货币数据平台，提供价格、市值、交易量等数据。',
            tags: ['加密货币', '数据', '免费', 'API'],
            url: 'https://www.coingecko.com/'
          },
          {
            id: 'messari',
            name: 'Messari',
            description: '加密资产研究平台，提供专业代币分析和评级服务。',
            tags: ['加密货币', '研究', '评级', '报告'],
            url: 'https://messari.io/'
          }
        ],
        backtest: [
          {
            id: 'ccxt',
            name: 'CCXT',
            description: '统一加密货币交易所API，支持100+交易所接入和策略回测。',
            tags: ['加密货币', 'API', '多交易所', '开源'],
            url: 'https://github.com/ccxt/ccxt'
          },
          {
            id: 'freqtrade',
            name: 'Freqtrade',
            description: '开源加密货币量化交易机器人，支持策略回测和实盘。',
            tags: ['加密货币', '量化', '回测', '实盘'],
            url: 'https://www.freqtrade.io/'
          },
          {
            id: 'tradingview',
            name: 'TradingView',
            description: '专业图表分析平台，支持加密货币策略回测和社区分享。',
            tags: ['图表', '分析', '回测', '社区'],
            url: 'https://www.tradingview.com/'
          }
        ],
        trading: [
          {
            id: 'binance',
            name: 'Binance',
            description: '全球最大加密货币交易所，支持数百种加密货币的现货和衍生品交易。',
            tags: ['加密货币', '交易所', '交易', '全球'],
            url: 'https://www.binance.com/'
          },
          {
            id: 'okx',
            name: 'OKX',
            description: '全球知名加密货币交易所，提供现货、合约、DeFi等服务。',
            tags: ['加密货币', '交易所', '合约', 'DeFi'],
            url: 'https://www.okx.com/'
          },
          {
            id: 'huobi',
            name: '火币',
            description: '全球领先加密货币交易平台，支持多种交易方式和丰富币种。',
            tags: ['加密货币', '交易所', '交易', '平台'],
            url: 'https://www.huobi.com/'
          }
        ]
      }
    ]
  },

  onLoad: function() {
    console.log('交易工具页面加载');
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
      url: `/pages/detail/detail?module=trading_tools&id=${source.id}`
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
      url: `/pages/common/list?module=trading_tools&category=${categoryId}&subtype=${subType}`
    });
  },

  onShareAppMessage: function() {
    return {
      title: '璇天凤舞的数据助手 - 交易工具',
      path: '/pages/tools/tools',
      imageUrl: ''
    };
  }
});