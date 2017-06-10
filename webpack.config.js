var path      = require('path');
var join      = path.join;
var resolve   = path.resolve;

module.exports = {
	target: 'node',
	entry: './src/prod.js',
	output: {
		libraryTarget: 'commonjs',
		path: resolve(__dirname),
		filename: 'handler.js'
	},
	resolve: {
		modules: ['node_modules', './src']
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}
		]
	}
};
