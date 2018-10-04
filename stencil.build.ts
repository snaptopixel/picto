import { Config } from '@stencil/core'
import { stylus } from '@stencil/stylus'
import svg from 'rollup-plugin-svgo'
import alias from 'rollup-plugin-alias'

export const config: Config = {
  namespace: 'u-components',
  globalStyle: 'src/styles/global.styl',
  outputTargets: [{
    type: 'dist'
  }],
  plugins: [
    alias({
      '@': 'src'
    }),
    svg(),
    stylus({
      injectGlobalPaths: [
        'src/styles/helpers.styl'
      ]
    })
  ]
}
