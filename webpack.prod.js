const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = merge(common, {
 mode: "production",
 module: {
  rules: [
   {
    test: /.s?css$/,
    use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
   },
  ],
 },
 optimization: {
  minimize: true,
  minimizer: [new CssMinimizerPlugin()],
 },
 plugins: [
  new MiniCssExtractPlugin({ filename: "main.css" }),
  new WorkboxPlugin.GenerateSW(),
 ],
});
