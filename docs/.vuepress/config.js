import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import markdownItRegex from 'markdown-it-regex'
import markdownItContainer from 'markdown-it-container'

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
            'how-kokanu-is-being-developed.md',
            'pronunciation.md',
            'grammar.md',
            'clarifying-descriptions.md',
            'word-derivations.md',
            'using-the-parts-of-speech.md',
            'tense-aspect-mood.md',
            'numbers-mathematics.md',
          ]
        },
        '/reference/special-words/'
      ],
      '/reference/special-words/': [
        '/reference/',
        {
          text: 'Special Words',
          children: [
            'README.md',
            'hon.md',
            'hu.md',
            'ka.md',
            'ke.md',
            'la.md',
            'lun.md',
            'peko.md',
            'pijen.md',
            'si.md',
            'so.md',
            'sun.md',
            'we.md'
          ]
        }
      ]
    },

    repo: 'Kokanu/kokanu-guide',
  }),

  bundler: viteBundler(),

  // Convert every word preceded by $ into a gloss
  extendsMarkdown: (md) => {
    md.use(markdownItContainer, "translation")
    md.use(markdownItRegex, {
      name: 'dictionary',
      regex: /\$(\w+)/,
      replace: (match) => {
        return `<a href="https://dictionary.kokanu.com/${match}?lang=en">${match}</a>`
      }
    })
  }
})