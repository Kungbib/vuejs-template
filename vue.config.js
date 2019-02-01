const path = require('path');
const webpack = require('webpack');
process.env.VUE_APP_VERSION = require('./package.json').version;

module.exports = {
  assetsDir: undefined,
  baseUrl: '/',
  outputDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,
  css: undefined,
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '~': path.resolve(__dirname, 'src/'),
        '@': path.resolve('src/'),
        modernizr$: path.resolve(__dirname, '.modernizrrc'),
      },
    },
    plugins: [
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ],
  },
  chainWebpack(config) {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => ({
        ...options,
        compilerOptions: {
          ...options.compilerOptions,
          preserveWhitespace: true,
        },
      }));
    config.module
      .rule('modernizr')
      .test(/\.modernizrrc$/)
      .use('webpack-modernizr-loader')
      .loader('webpack-modernizr-loader');
  },
  pluginOptions: {moment: {locales: ['en', 'sv'],},},
}