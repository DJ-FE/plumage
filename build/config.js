/**
 * Created by zhengzk on 2017/7/19.
 */
const path = require('path')
const pkg = require('../package.json')
const version = process.env.VERSION || pkg.version

// Rollup plugins
const replace = require('rollup-plugin-replace')
const alias = require('rollup-plugin-alias')
const babel = require('rollup-plugin-babel')
const rollup_resolve = require('rollup-plugin-node-resolve')
const flow = require('rollup-plugin-flow-no-whitespace')
const eslint = require('rollup-plugin-eslint')

const timeStr = ( new Date() ).toISOString().replace(/:\d+\.\d+Z$/, 'Z')

const banner =
  '/*!\n' +
  ' * ' + pkg.name + ' <' + version + '@' + timeStr + '>' + '\n' +
  ' * Copyright (c) 2017 DaoJia-JZ-FE Team \n' +
  ' * Released under the MIT License.\n' +
  ' */\n'


const aliases = require('./alias')
const resolve = p => {
  const base = p.split('/')[0]
  if (aliases[base]) {
    return path.resolve(aliases[base], p.slice(base.length + 1))
  } else {
    return path.resolve(__dirname, '../', p)
  }
}

const builds = {
  'dev': {
    input: resolve('src/scripts/index.js'),
    output: resolve('dist/js/' + pkg.name + '.js'),
    format: 'umd',
    env: 'development'
  },
  'prod': {
    input: resolve('src/scripts/index.js'),
    output: resolve('dist/js/' + pkg.name + '.min.js'),
    format: 'umd',
    env: 'production',
    banner
  }
}

function genConfig(opts) {
  const config = {
    input: opts.input,
    // output: opts.output,
    // format: opts.format,
    output: {
      file: opts.output,
      format: opts.format
    },
    name: opts.name || pkg.name,
    external: opts.external,
    banner: opts.banner,
    plugins: [
      rollup_resolve({
        jsnext: true,  // Default: false
        browser: true  // Default: false
      }),
      replace({
        __VERSION__: version,
        __NAME__: opts.name || pkg.name
      }),
      eslint({
        exclude: [
          'node_modules/**',
        ]
      }),
      babel({
        exclude: 'node_modules/**', // only transpile our source code
        runtimeHelpers: true,
        externalHelpers: true
      }),
      flow(),
      alias(Object.assign({}, aliases, opts.alias))
    ].concat(opts.plugins || [])
  }
  
  if (opts.env) {
    config.plugins.push(replace({
      'process.env.NODE_ENV': JSON.stringify(opts.env)
    }))
  }
  return config
}

// function genConfig(opts){
//   return Object.assign({
//     input: opts.input,
//     output: opts.output,
//     name: opts.name || pkg.name,
//   },genBaseConfig (opts))
// }

// function genCliConfig(opts){
//   return Object.assign({
//     entry: opts.input,
//     dest: opts.output,
//     moduleName: opts.name || pkg.name,
//   }, genBaseConfig (opts))
// }

if (process.env.TARGET) {
  module.exports = genConfig(builds[process.env.TARGET])
} else {
  exports.getBuild = name => genConfig(builds[name])
  exports.getAllBuilds = () => Object.keys(builds).map(name => genConfig(builds[name]))
}
