var debug   = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');

module.exports = {
	context: __dirname + "/src"
	, devtool: debug ? "inline-sourcemap" : null
	, entry: ['./client.js']
	, module: {
		loaders: [{
			test: /\.css$/,
			loader: "style-loader!css-loader"
		}, {
			loader: 'babel'
			, test: /\.js?$/
			, exclude: /(node_modules|bower_components)/
			, query: {
				presets: ['react', 'es2015', 'stage-2']
				, plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
			}
		}, {
			loader: 'babel'
			, test: /\.jsx?$/
			, exclude: /(node_modules|bower_components)/
			, query: {
				presets: ['react', 'es2015', 'stage-2']
				, plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
			}
		}, {
			test: /\.json$/,
			loader: "json"
		}, {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
			{test: /\.(woff|woff2)$/, loader: "url?prefix=font/&limit=5000"},
			{test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
			{test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"}]
	}
	, output: {
		path: __dirname + "/src/"
		, filename: "client.min.js"
	}
	, plugins: debug ? [] : [
		new webpack.optimize.DedupePlugin()
		, new webpack.optimize.OccurenceOrderPlugin()
		, new webpack.optimize.UglifyPlugin({mangle: false, sourcemap: false})
	]
	, devServer: {
		contentBase: "./"
		, hot: true
	}
};