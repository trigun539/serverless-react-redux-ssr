var path      = require('path');
var join      = path.join;
var resolve   = path.resolve;
var externals = require('webpack-node-externals');

module.exports = {
	target: 'node',
	externals: [externals()],
	entry: './src/dev.js',
	output: {
		path: resolve(__dirname),
		filename: 'server.js'
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
