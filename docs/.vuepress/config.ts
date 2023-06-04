import { defineConfig } from 'vuepress/config';

import { navbarEn, navbarZh, sidebarEn, sidebarZh } from './configs/index';

export default defineConfig({
  base: '/stop-mess-around-docs/',

  // TODO: 隐藏百度验证
  // 百度验证
  head: [
    [
      'script',
      {},
      `
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?7485d73defb81907fdd35100ecc593a7";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();
    `,
    ],
    [
      'script',
      {
        async: true,
        src: 'https://www.googletagmanager.com/gtag/js?id=G-LSLSPWW78C',
      },
    ],
    [
      'script',
      {},
      "window.dataLayer = window.dataLayer || [];console.log('1111sss');\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-LSLSPWW78C');",
    ],
  ],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'stop-mess-around',
      // TODO: 英文的描述
      description: '英文的描述',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'stop-mess-around',
      description:
        '在你瞎逛各种网站时，帮助你节约时间，提升你工作学习效率的浏览器插件',
    },
  },
  markdown: {},
  themeConfig: {
    locales: {
      '/': {
        selectText: 'English',
        searchPlaceholder: 'search...',
        nav: navbarEn,
        sidebar: sidebarEn,
        // TODO: repo
        repo: 'obkoro1LinCause/stop-mess-around-docs',
      },
      '/zh/': {
        selectText: '简体中文',
        searchPlaceholder: '请搜索...',
        nav: navbarZh,
        sidebar: sidebarZh,
        // TODO: repo 是否要改为中国码云
        repo: 'obkoro1LinCause/stop-mess-around-docs',
      },
    },
  },
  plugins: [
    // TODO: 公告栏弹窗是否用插件：https://github.com/mqyqingfeng/Blog/issues/261
    // TODO: 禁止复制 vuepress-plugin-copyright
    // TODO:  背景音乐插件： 弄点白噪音听一下，或者轻音乐。
    // TODO: 动态标题展示
    [
      require('./configs/plugins/index'),
      {
        title: '消息提示',
        body: [
          {
            type: 'title',
            content: '欢迎加入QQ交流群 🎉🎉🎉',
            style: 'text-aligin: center',
          },
          {
            type: 'image',
            src: 'https://cdn.jsdelivr.net/gh/mqyqingfeng/picture/IMG_3516.JPG',
          },
        ],
        footer: [
          {
            type: 'button',
            text: '打赏',
            link: '/',
          },
        ],
      },
    ],
  ],
});
