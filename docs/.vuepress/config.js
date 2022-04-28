module.exports = {
  base: '/lib/vue2-ui-docs/',
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
      },
      { 
        text: 'GitHub',
        link: 'https://github.com/chenqichun/cqc-vue2-ui.git'
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
        },
        {
          collapsable: false,
          children: [
            [ 'dragList', '拖拽排序']
          ]
        },
        {
          collapsable: false,
          children: [
            [ 'progress', '进度条']
          ]
        },
        {
          collapsable: false,
          children: [
            [ 'carousel', '走马灯']
          ]
        },
        {
          collapsable: false,
          children: [
            [ 'previewImg', '图片预览']
          ]
        },
        {
          collapsable: false,
          children: [
            [ 'message', '消息提示']
          ]
        },
        {
          collapsable: false,
          children: [
            [ 'signBoard', '画板']
          ]
        },
        {
          collapsable: false,
          children: [
            [ 'waitting', '未完待续...']
          ]
        }
      ]
    }
  }
}