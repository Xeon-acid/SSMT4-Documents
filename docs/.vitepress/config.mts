import { defineConfig } from 'vitepress'
import { nav } from './configs/nav.mts'
import { sidebar } from './configs/sidebar.mts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SSMT4-Documents",
  description: "Documents for SSMT4",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav,

    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
