const path = require('path');
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  devServer: {
    inline:true,
    contentBase : './public',
    port: 4000 ,
  },
  module : {
    rules: [
        {
            test : /\.js$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query:{
                presets: ['es2015']
             } 
        },
        {
            test: /\.scss$/,
            loader: 'style-loader!css-loader!sass-loader'

        }
    ]

  }
};