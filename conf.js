exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['tests_specs/*.js'],
	capabilities: {
		browserName: 'chrome',
		chromeOptions: {
			args: ["--headless","--disable-gpu","--window-size=800,600"]
		}
	},
	 baseUrl: 'http://automationpractice.com'
}