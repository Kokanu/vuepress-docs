import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  title: 'Kokanu',
  description: 'The minimal IAL.',

  theme: defaultTheme({
    logo: '/images/logo.svg',

    navbar: [
      '/',
      '/guide/',
      '/reference/',
      {
        text: 'Dictionary',
        link: 'https://dictionary.kokanu.com/'
      },
      {
        text: 'Discord',
        link: 'https://discord.gg/fMAfGRkGvQ'
      },
    ],

    sidebar: {
      '/reference/': [
        {
          text: 'Reference',
          children: [
            'README.md',
            'pronunciation.md',
            'tense-aspect-mood.md'
          ]
        }
      ]
    },

    repo: 'Kokanu/kokanu-guide',
  }),

  bundler: viteBundler(),
})
