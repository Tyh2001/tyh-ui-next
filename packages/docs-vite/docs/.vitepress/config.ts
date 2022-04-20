import { defineConfigWithTheme } from 'vitepress'
import type { Config as ThemeConfig } from '@vue/theme'
import baseConfig from '@vue/theme/config'
import { headerPlugin } from './headerMdPlugin'

// 导航栏
const nav: object[] = [
  {
    text: '首页',
    activeMatch: `/`,
    link: '/'
  },
  {
    text: '组件',
    activeMatch: `^/components/`,
    link: '/components/install'
  },
  {
    text: '关于',
    activeMatch: `^/about/`,
    link: '/about/index'
  }
]

// 侧边栏
const sidebar: object[] = [
  {
    text: '开发指南',
    collapsible: true,
    children: [{ text: '快速上手', link: '/components/install' }]
  },
  {
    text: '基础组件',
    // 这个控制是否可以折叠
    collapsible: true,
    children: [
      { text: 'Button 按钮', link: '/components/button' },
      { text: 'Icon 图标', link: '/components/icon' },
      { text: 'Link 链接', link: '/components/link' }
    ]
  },
  {
    text: '表单',
    collapsible: true,
    children: [
      { text: 'Table 表格', link: '/components/table' },
      { text: 'Radio 单选框', link: '/components/radio' },
      { text: 'Input 输入框', link: '/components/input' }
    ]
  },
  {
    text: '提示',
    children: []
  },
  {
    text: '其它',
    children: []
  }
]

const config: object = defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,
  // base: '/v3/',
  title: 'hello',
  description: 'hello',
  // srcDir: 'src',
  // srcExclude: ['tutorial/**/description.md'],
  scrollOffset: 'header',
  sidebarDepth: 0,

  // 主题配置
  themeConfig: {
    nav,
    sidebar,
    sidebarDepth: 0,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Tyh2001/tyh-ui' }
    ],
    editLink: {
      repo: 'Tyh2001/tyh-ui',
      text: '在 GitHub 上编辑此页'
    },
    footer: {
      license: { text: '', link: '' },
      copyright: 'hello'
    }
  },
  markdown: {
    config(md) {
      md.use(headerPlugin)
    }
  }
})

export default config
