import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import purgecssFn from '@fullhuman/postcss-purgecss';
import tailwindcss from 'tailwindcss';

const purgecss = purgecssFn({
  content: [
    './src/index.html',
    '.src/**/*.css',
    '.src/**/*.tsx',
    './src/**/*.ts'
  ],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  outputTargets: [
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: 'https://myapp.local/'
    }
  ],
  plugins: [
    postcss({
      plugins: [
        tailwindcss,
        ...process.env.NODE_ENV === 'production' ? [purgecss] : []
      ]
    })
  ]
};
