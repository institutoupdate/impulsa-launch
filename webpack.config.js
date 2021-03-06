const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const ENV = process.env.NODE_ENV || "development";

let entry = [path.resolve("src")];
let plugins = [
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify(ENV),
    },
  }),
];

const htmlPlugin = new HTMLWebpackPlugin({
  template: path.resolve(__dirname, "src", "index.html"),
  filename: "index.html",
  inject: "body",
  minify: false,
});

if (ENV !== "production") {
  plugins.unshift(htmlPlugin);
  plugins = plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ]);
} else {
  plugins.unshift(htmlPlugin);
  plugins = plugins.concat([new webpack.NoEmitOnErrorsPlugin()]);
}

module.exports = {
  mode: ENV,
  devtool: "#source-map",
  entry,
  resolve: {
    alias: {
      react: "preact/compat",
      "react-dom/test-utils": "preact/test-utils",
      "react-dom": "preact/compat",
    },
    modules: ["src", "node_modules"],
  },
  output: {
    path: path.resolve(__dirname, "public"),
    publicPath: "",
    filename: function () {
      if (ENV == "production") {
        return "[hash].js";
      } else {
        return "[name].js";
      }
    },
  },
  plugins,
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        use: {
          loader: "babel-loader",
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(css|less)$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /fonts\/(.*)\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: "file-loader?name=static/[hash].[ext]&publicPath=",
      },
      {
        test: /\.(png|jpg|svg|gif|mp4)$/,
        use: "file-loader?name=static/[hash].[ext]&publicPath=",
      },
    ],
  },
};
