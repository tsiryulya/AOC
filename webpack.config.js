const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const GoogleFontsPlugin = require("@beyonk/google-fonts-webpack-plugin");
const webpack = require("webpack");
/*var $       = require( 'jquery' );
var dt      = require( 'datatables.net' )( window, $ );
var buttons = require( 'datatables.net-buttons' )( window, $ );
const buttonscolVis = require( 'datatables.net-buttons/js/buttons.colVis.js' )(); 
const buttonshtml5 = require( 'datatables.net-buttons/js/buttons.html5.js' )();  
const buttonsflash = require( 'datatables.net-buttons/js/buttons.flash.js' )();  
const buttonsprint = require( 'datatables.net-buttons/js/buttons.print.js' )();  */


module.exports = {
  module: {
    rules: [ 
        
      {
        test: /\.html$/,
        use: [{ loader: "html-loader", options: { minimize: true } }]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "./img/[name].[ext]",
              limit: 10000,
              outputPath: "img"
            }
          },
          {
            loader: "img-loader"
          }
        ]
      },
         {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        use: 'file-loader',
      },
    
    {
        test: /\.(woff|woff2|ttf|eot|svg)(\?v=\d+\.\d+\.\d+\.)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "./fonts/sourcesanspro/[name].[ext]",
              limit: 50000,
              outputPath: "fonts"
            }
          },
            {
            loader: "resolve-url-loader",
            }
        ]
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg)(\?v=\d+\.\d+\.\d+\.)?$/,
        use: 'url-loader?limit=10000',
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"            
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      },
        {
            test: /datatables\.net.*/,
            use: {
            loader: 'imports-loader?define=>false',
            }
        }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "src/index.html",
      filename: "./index.html"
    }),
     new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new GoogleFontsPlugin({
            fonts: [
                { family: "Source Sans Pro" }
            ]
            /* ...options */
    }), 
     new webpack.ProvidePlugin({
         $: 'jqury',
         jQuery: 'jquery',
         'window.jQuery': 'jquery'
     })
  ]
};