import {defineConfig} from 'vuepress/config'

import {
  navbarEn,
  navbarZh,
  sidebarEn,
  sidebarZh
} from './configs/index'


export default defineConfig({
  base: '/stop-mess-around-docs/',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'stop-mess-around',
      description: '英文的描述'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'stop-mess-around',
      description: '中文的描述'
    }
  },
  markdown: {
  },
  themeConfig:{
    // repo:'',
    locales: {
      '/': {
        selectText:'English',
        searchPlaceholder:'search...',
        nav:navbarEn,
        sidebar: sidebarEn,
        // TODO: repo
        repo: 'obkoro1LinCause/stop-mess-around-docs',
      },
      '/zh/': {
        selectText:'简体中文',
        searchPlaceholder:'请搜索...',
        nav:navbarZh,
        sidebar: sidebarZh,
        // TODO: repo 是否要改为中国码云
        repo: 'obkoro1LinCause/stop-mess-around-docs',

      },
    },
  },
  plugins:[
    [require('./configs/plugins/index'),{
        title: "消息提示",
        body: [
          {
            type: "title",
            content: "欢迎加入QQ交流群 🎉🎉🎉",
            style: "text-aligin: center",
          },
          {
            type: "image",
            src: "https://cdn.jsdelivr.net/gh/mqyqingfeng/picture/IMG_3516.JPG",
  
          },
        ],
        footer: [
          {
            type: "button",
            text: "打赏",
            link: "/",
          },
        ]
    }],
  ],
});