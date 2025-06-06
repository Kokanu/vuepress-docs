import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import markdownItRegex from 'markdown-it-regex'
import markdownItBracketedSpans from 'markdown-it-bracketed-spans'
import markdownItAttrs from 'markdown-it-attrs'

export default defineUserConfig({
  lang: 'en-US',
  title: 'Kokanu',
  description: 'The minimal IAL.',
  theme: defaultTheme({
    logo: '/images/logo.svg',
    externalLinkIcon: false,

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
            'ki.md',
            'la.md',
            'lun.md',
            'peko.md',
            'pijen.md',
            'se.md',
            'so.md',
            'sun.md',
            'wi.md'
          ]
        }
      ]
    },

    repo: 'Kokanu/vuepress-docs',
  }),

  bundler: viteBundler(),

  // Convert every word preceded by $ into a gloss
  extendsMarkdown: (md) => {
    md.use(markdownItRegex, {
      name: 'dictionary',
      regex: /\$(\w+)/,
      replace: (match) => {
        return `<a href="https://dictionary.kokanu.com/${match}?lang=en" style="text-decoration:none">${match}</a>`
      }
    })

    md.use(markdownItBracketedSpans)
    md.use(markdownItAttrs)
  }
})
