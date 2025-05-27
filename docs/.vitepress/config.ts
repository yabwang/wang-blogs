import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'VitePress',
  description: 'Vite & Vue powered static site generator.',
  base: '/',


  themeConfig: {
      nav: [
        { text: 'Example', link: '/example' },

        {
          text: '算法题库',
          items: [
            { text: '数组专题', link: '/algorithms/array' },
            { text: '动态规划', link: '/algorithms/dp' },
          ],
        },

      ],

      sidebar: [
        {
          text: '算法题库',
          collapsible: true,  // 允许折叠
          collapsed: false,   // 默认展开
          items: [
            { text: '数组专题', link: '/algorithms/array' },
            { text: '动态规划', link: '/algorithms/dp' },
          ],
        },
        {
          text: 'NLP',
          collapsible: true,  // 允许折叠
          collapsed: false,   // 默认展开
          items: [
            { text: 'NLP', link: '/nlp/cosine' },
          ],
        }
      ]

  },


});

