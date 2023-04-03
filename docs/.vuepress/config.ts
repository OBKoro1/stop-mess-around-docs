import { defineUserConfig, defaultTheme } from 'vuepress'
import {
  navbarEn,
  navbarZh,
  sidebarEn,
  sidebarZh
} from './configs/index'
// TODO: https://github1s.com/vuepress/vuepress-next/blob/HEAD/docs/.vuepress/configs/head.ts
// 参考vuepress文档配置

// TODO: vuepress 公告插件
// https://vuepress-theme-reco.recoluan.com/views/1.x/


export default defineUserConfig({
  // set site base to default value
  base: '/stop-mess-around-docs/',
  // extra tags in `<head>`
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
  theme: defaultTheme({
    locales: {
      '/': {
        navbar: navbarEn,
        sidebar: sidebarEn,
        // TODO: repo
        repo: 'obkoro1LinCause/stop-mess-around-docs',
        selectLanguageName: 'English',
      },
      '/zh/': {
        sidebar: sidebarZh,
        navbar: navbarZh,
        selectLanguageName: '简体中文',
        // TODO: repo 是否要改为中国码云
        repo: 'obkoro1LinCause/stop-mess-around-docs',
      },
    },
  }),
})