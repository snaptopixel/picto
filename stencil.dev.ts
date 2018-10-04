import { Config } from '@stencil/core'
import { stylus } from '@stencil/stylus'
import svg from 'rollup-plugin-svgo'
import alias from 'rollup-plugin-alias'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'

export const config: Config = {
  namespace: 'pictograph',
  globalStyle: 'src/styles/global.styl',
  outputTargets: [{
    type: 'www'
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
