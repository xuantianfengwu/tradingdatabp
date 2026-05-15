Page({
  data: {
    reports: []
  },
  onLoad: function() {
    this.loadReports();
  },
  loadReports: function() {
    const mockReports = [
      {
        id: 1,
        title: '2024年A股市场展望',
        author: '中信证券',
        date: '2024-01-15',
        summary: '预计2024年A股市场将呈现震荡上行格局...'
      },
      {
        id: 2,
        title: '新能源行业发展趋势分析',
        author: '国泰君安',
        date: '2024-01-10',
        summary: '新能源汽车渗透率持续提升，产业链机会显著...'
      },
      {
        id: 3,
        title: '量化策略月度报告',
        author: '华泰证券',
        date: '2024-01-08',
        summary: '本月量化策略表现优异，年化收益达到18.5%...'
      },
      {
        id: 4,
        title: '半导体行业深度研究',
        author: '招商证券',
        date: '2024-01-05',
        summary: '国产替代加速，半导体行业迎来发展黄金期...'
      }
    ];
    this.setData({ reports: mockReports });
  }
})
