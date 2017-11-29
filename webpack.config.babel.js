import path from 'path'
import webpack from 'webpack'
import { ReactLoadablePlugin } from 'react-loadable/webpack'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const port = 9090

module.exports = (env) => {
  let plugins;
  if (env.production) {
    plugins = [
      new CleanWebpackPlugin(['dist']),
      new webpack.DefinePlugin({
        'process.env': { NODE_ENV: JSON.stringify('production') }
      }),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        comments: false,
        warnning: false
      })
    ]
  } else {
    plugins = [
      new HtmlWebpackPlugin({
        title: 'HEELO REACT',
        template: 'index.html'
      }),
      new webpack.HotModuleReplacementPlugin(),
      new ReactLoadablePlugin({
        filename: './dist/react-loadable.json',
      })
    ]
  }

  return {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
      path: path.join(__dirname, 'dist'),
      publicPath: '/',
      filename: 'app.[hash].js',
      chunkFilename: '[chunkhash].js'
    },
    plugins,
    module: {
      loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }, {
        test: /\.less$/,
        include: /src/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
      }]
    },
    devServer: {
      host: '0.0.0.0',
      contentBase: 'dist',
      port: port,
      hot: true,
      historyApiFallback: true,
      inline: true,
      compress: true,
      before: function(app) {
        app.all('/*/ajax/**', function(req, res) {
          // req.query
          var path = './src/mock' + req.path.replace(/\/ajax/, '');
          delete require.cache[require.resolve(path)];

          setTimeout(function() { res.json(require(path)()); }, 500);
        });
      }
    },
    devtool: 'source-map',
    resolve: {
      extensions: ['.js', 'json']
    }
  }
}
