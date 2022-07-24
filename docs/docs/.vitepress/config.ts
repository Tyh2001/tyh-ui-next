import { nav } from './utils/nav'
import { sidebar } from './utils/sidebar'
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Tyh Ui',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: 'https://tianyuhao.cn/images/tyh-ui/tyh-ui-logo.svg'
      }
    ]
  ],
  description:
    'Fighting Design 是一个用 TypeScript + Template 编写的 Vue3 组件库。Fighting Design 是一个简洁而又轻量级的 Vue3 组件库，为开发者、设计师和产品经历准备。有希望开发者可以借用 Fighting Design 的组件设计思想，在不久的将来，孕育出更高阶的组件库。', // 页面的描述 添加到 mate 标签中
  themeConfig: {
    nav,
    sidebar,
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/FightingDesign/fighting-design'
      }
    ],
    logo: 'https://tianyuhao.cn/images/tyh-ui/tyh-ui-logo.svg'
  }
})
