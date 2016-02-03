module.exports = {
	handlebars: {
		partials: require('path').join(__dirname, 'handlebars/partials'),
		helpers: require.resolve('./handlebars/helpers.js'),
    templates: require('path').join(__dirname, 'handlebars/templates')
	},
	less: {
		main: [
			require.resolve('./less/theme.less')
		]
	}
};
