import { defineConfig } from 'vitepress'
import { nav } from './nav'
import { sidebar } from './sidbar'
import { handleCode } from './markdown'

export default defineConfig({
    title: '塔容万物',
    lang: 'zh-CN',
    srcDir: './src',
    outDir: './dist',
    head: [
        ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }]
    ],
    cleanUrls: 'with-subfolders',
    lastUpdated: true,
    themeConfig: {
        // @ts-ignore
        nav,
        // @ts-ignore
        sidebar,
        outline: 'deep',
        outlineTitle: '目录',
    },
    markdown: {
        lineNumbers: false,
        config: (md)=>{
            md.use(handleCode)
        }
    },
    vite:{
        build: {
            assetsInlineLimit: 0,
        }
    }
})
