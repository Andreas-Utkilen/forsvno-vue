// eslint-disable-next-line @typescript-eslint/no-var-requires
const VueLoaderPlugin = require("vue-loader/lib/plugin");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: {
    stepperVue: "./src/stepper.es6",
    diagramVue: "./src/diagram.es6",
    // storyVue: "./src/story.es6",
    promocardHorizontalVue: "./src/promocard-horizontal.es6",
    //mediaPlayerVue: "./src/media-player.es6",
    mapHeaderVue: "./src/map-header.es6"
  },
  plugins: [
    new VueLoaderPlugin(),
    // Bad workaround for treeshaking vuetify css
    new MiniCssExtractPlugin({
      publicPath: "/_/asset/forsvno:[hash]/",
      path: require("path").resolve(__dirname, "/dist/css/"),
      filename: "style.css",
      chunkFilename: "styleChunk.css"
    })
  ],
  module: {
    rules: [{
        test: /\.es6?$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        use: [
          "vue-loader"
        ]
      },
      {
        test: /\.s?[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(ttf|eot|svg|gif|png|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [{
          loader: 'file-loader'
        }]
      }
    ]
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js"
    },
    extensions: [".es6", ".js", ".vue", ".ts"]
  },
  output: {
    publicPath: "/_/asset/forsvno:[hash]/",
    path: require("path").resolve(__dirname, "../forsvno/src/main/resources/assets"),
    filename: "js/[name].js",
    chunkFilename: "js/[name].chunk.js"
  }
};