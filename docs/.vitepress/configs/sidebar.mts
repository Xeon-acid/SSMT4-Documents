import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/developer/': [
    {
      text: 'VitePress2.0文档',
      items: [
        { text: '项目初始化', link: '/developer/vitepress/project-init' }
      ]
    },
    {
      text: 'Tauri学习笔记',
      items: [
        { text: '如何设置图标', link: '/developer/tauri/HowToSetIcon/HowToSetIcon' },
        { text: '项目初始化', link: '/developer/tauri/ProjectInit/ProjectInit' },
        { text: '第一次构建超时问题', link: '/developer/tauri/BuildTimeOutError/BuildTimeOutError' },
        { text: '构建并发布', link: '/developer/tauri/BuildAndPublish/BuildAndPublish' },
      ]
    },
  ],
  '/': [
    {
      text: 'Examples',
      items: [
        { text: 'Markdown Examples', link: '/markdown-examples' },
        { text: 'Runtime API Examples', link: '/api-examples' }
      ]
    }
  ]
}
