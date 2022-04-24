module.exports = {
  base: '/lib/cqc-vue2-ui-docs/',
  title: 'cqc-vue2-ui文档',
  description: '一个基于vue2开发的pc端ui库',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    nav: [
      {
        text: '主页',
        link: '/'
      }
    ],
    sidebar: {
      '/components/': [
        {
          collapsable: false,
          children: [
            [ 'guide', '快速上手']
          ]
        },
        {
          collapsable: false,
          children: [
            [ 'button', '按钮']
          ]
        }
      ]
    }
  }
}