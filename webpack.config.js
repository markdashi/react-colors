var path = require('path');
var webpack = require('webpack')

module.exports = {
	entry: path.resolve(__dirname, 'examples/index.js'),
	output: {
		path: path.resolve(__dirname, 'examples/build'),
		publicPath: 'http://127.0.0.1:8080/build/',
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015', 'react', 'stage-2'],
				plugins: ['transform-decorators-legacy'],
			}
		},{
			test: /\.(png|jpg|gif)$/,
			loader: 'url-loader?limit=8192'
		},{
			test: /\.css$/,
			loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
		},{
			test: /\.json$/,
			loader: 'json-loader'
		},{
			test: /\.md$/,
			loader: 'raw-loader'
		}]
	},
	devServer: {
		historyApiFallback: true,
		hot: true,
		inline: true,
		//progress: true,
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE.ENV':"development"
		}),
		new webpack.HotModuleReplacementPlugin()
	],
/*	plugins: [
		new webpack.DefinePlugin({
		  'process.env': {
		    NODE_ENV: JSON.stringify('production')
		  }
		}),
		new webpack.optimize.UglifyJsPlugin()	
	]*/
}	

			