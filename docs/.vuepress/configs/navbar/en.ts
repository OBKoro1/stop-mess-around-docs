import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from '../meta.js'

export const navbarEn: NavbarConfig = [
  {
    text: 'Guide',
    link: '/guide/',
  },
  {
    text: 'features',
    link: '/features/',
  },
  // TODO: sidebar 思考
  // 插入赞助、插入Github赞赏。
  // 版本提示
  // {
  //   text: `v${version}`,
  //   link: '/CHANGELOG/',
  // },
]
