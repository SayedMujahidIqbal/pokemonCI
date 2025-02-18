const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.chromeWebSecurity = false
      return config
    },
    baseUrl: 'http://localhost:8080',
  },
})
