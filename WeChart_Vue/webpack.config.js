const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");
const devServer = require("webpack-dev-server");
module.exports = {

    // 以main.js为入口文件打包[单文件入口]
    // entry:"./main.js",

    // 没有依赖关系的若干个js文件打包在一起
    // entry:["./index.js","./payment.js"],

    //单页面应用 用的较多，key==>>chunckname   value可以传字符串或数组
    entry:{
        index:"./main.js",
    },
    module:{
        loaders:[
            {
                test:/\.scss$/,
                loader:"style-loader!css-loader!sass-loader"  //node-sass
            },
            {
                test:/\.css$/,
                loader:"style-loader!css-loader"
            },
            {
                test:/\.js$/,
                loader:"babel-loader",
                query:{
                    presets:["es2015"]
                },
                exclude:/node_modules/
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: "url-loader?limit=50000&name=[path][name].[ext]"
            },
            {
                test:/\.vue$/,
                loader:"vue-loader"
            }

        ]
    },
    output:{
        // [name] [hash] [chunkhash]
        path:__dirname+"/dist/",
        // filename:"bundle[hash].js",
        // filename:"js/[name]-[chunkhash].js",
        filename:"bundle.js"
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
    resolve: {
        alias: { 'vue': 'vue/dist/vue.js' }
    },
    devServer: {
        contentBase: "./",    //本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true             //实时刷新
  },
  watch:true
};
