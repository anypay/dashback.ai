module.exports = {
  port: 3000,
  plugins: [
    {
      register: require('inert')
    }
  ],
	options: {
		routes: {
			cors: {
				origin: ['*']
			}
		}
	}
}
