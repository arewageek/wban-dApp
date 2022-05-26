process.env.VUE_APP_VERSION = require('./package.json').version

module.exports = {
	pages: {
		index: {
			entry: 'src/main.ts',
			title: process.env.VUE_APP_TITLE
		}
	},
	pluginOptions: {
		quasar: {
			importStrategy: 'kebab',
			rtlSupport: false
		},
		i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    },
	}
	/*
	transpileDependencies: ['quasar'],
	devServer: {
    disableHostCheck: true
  }
	*/
}
