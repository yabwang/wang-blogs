import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'Wang"s Blog',
  description: 'Vite & Vue powered static site generator.',
  base: '/',


  themeConfig: {

      nav: [

        {
          text: '算法题库',
          items: [
            { text: '数组专题', link: '/algorithms/array' },
            { text: '动态规划', link: '/algorithms/dp' },
          ],
        },
        {
          text: 'java 基础',
          items: [
            // { text: 'java 基础', link: '/java/' },
          ],
        }

      ],

      sidebar: [
        {
          text: '算法题库',
          collapsed: true,   // 默认折叠
          items: [
            { text: '动态规划', link: '/algorithms/dp/' },
            { text: '并查集', link: '/algorithms/unionFind/' },
          ]
        },
        {
          text: '机器学习',
          collapsed: true,     // 默认折叠
          items: [
            { text: '余弦相似度', link: '/nlp/cosine/' }
          ]
        }
      ],

      lastUpdated: {
        text: 'Updated at',
        formatOptions: {
          dateStyle: 'full',
          timeStyle: 'medium'
        }
      },

      footer: {
        message: 'Released under the MIT License.',
        copyright: 'Copyright © 2025-present Wang'
      }

  },

  


});

