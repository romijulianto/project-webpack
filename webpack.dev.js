const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");


module.exports = merge(common, {
    mode: "development",
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        port: 3080 // <--- Add this line and choose your own port number
      }
})

