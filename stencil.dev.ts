import { Config } from '@stencil/core'
import { stylus } from '@stencil/stylus'
import svg from 'rollup-plugin-svgo'
import alias from 'rollup-plugin-alias'

export const config: Config = {
  namespace: 'picto',
  globalStyle: 'src/styles/global.styl',
  outputTargets: [{
    type: 'www',
    dir: 'docs'
  }],
  copy: [{
    src: 'themes',
    dest: 'themes'
  }],
  plugins: [
    alias({
      '@': 'src'
    }),
    svg(),
    stylus({
      includePaths: [
        'src/styles'
      ],
      injectGlobalPaths: [
        'helpers.styl'
      ]
    })
  ]
}
