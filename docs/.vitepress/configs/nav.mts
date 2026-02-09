import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: 'Home', link: '/' },
  { text: 'Examples', link: '/markdown-examples' },
  { 
    text: '开发者文档', 
    activeMatch: '/developer/',
    items: [
      { 
        text: 'VitePress2.0文档', 
        link: '/developer/vitepress/project-init' 
      }
    ]
  }
]
