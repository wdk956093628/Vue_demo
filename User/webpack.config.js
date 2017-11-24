const webpack = require("../Vue/User/node_modules/webpack");
 const htmlWebpackPlugin = require("../Vue/User/node_modules/html-webpack-plugin");
// const devServer = require("webpack-dev-server");

module.exports = {
    entry: {
      index:__dirname + "/main.js"
    },
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.scss$/,
                loader: "style-loader!css-loader!sass-loader"
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                query: {
                    presets: ["es2015"]
                },
                exclude: /node_modules/
            },
            {
                test:/\.(gif|png|jpg|woff|svg|eot|ttf|woff2)\??.*$/i,
                loader:"url-loader?limit=50000 & name=[path][name].[ext]"
            },
            {
                test: /\.vue$/,
                loader: "vue-loader"
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            //以index.html作为模板修改
            template:"./index.html",
            //打包生成的js文件引入的标签名
            inject:"head",
            //生成的html的文件名
            filename:"index.html",
            chunks:["index"],
            // excludeChunks:["index"]
        })
    ],
    resolve: { alias: { 'vue': 'vue/dist/vue.js' } },
    // devServer: {
    //     contentBase: "./",    //加载目录
    //     historyApiFallback: true,//不跳转
    //     inline: true             //实时刷新
    // },
    watch:true
};
