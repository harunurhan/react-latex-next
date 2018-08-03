import typescript from 'rollup-plugin-typescript2'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss-modules'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'

import pkg from './package.json'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    postcss({
      modules: true,
    }),
    url(),
    resolve(),
    typescript({
      rollupCommonJSResolveHack: true
    }),
    commonjs({
      namedExports: {
        'node_modules/katex/dist/katex.js': [
          'ParseError',
          'renderToString'
        ]
      }
    }),
  ]
}
