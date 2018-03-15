
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const url = require('url');
const qs = require('querystring');
const fs = require('fs');
const Mock = require('mockjs');

const Random = Mock.Random;
let list = [];

for (let i = 0; i < 5; i++) {
    const arr = [];

    for (let j = 0; j < 10; j++) {
        const subObj = Mock.mock({
            'name': Random.ctitle(2, 4),
            'price|1-100': 0,
            'img': Random.image('200x100', Random.color(), '#FFF', 'png'),
        });
        arr.push(subObj);
    }

    const obj = Mock.mock({
        type: Random.ctitle(2, 4),
        value: arr,
    });
    list.push(obj);
}


module.exports = {
    entry: './src/entry.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {test: /\.js$/, use: ['babel-loader']},
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.(png|jpg|gif|svg|jpeg|eot|woff|ttf)$/,
                use: ['url-loader']},
            {test: /\.html$/, use: ['html-loader']},
            {test: /\.vue$/, use: ['vue-loader']},
            {test: /\.scss$/, use: ['sass-loader']},
        ],
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js',
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
        // new UglifyJsWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        contentBase: __dirname,
        port: 8080,
        open: true,
        setup(app) {
            const arr = new Array(12);

            for (let i = 0; i < arr.length; i++) {
                const imageData =
                fs.readFileSync('./src/img/' + (i + 1) + '.png');

                const imageBuffer = new Buffer(imageData);

                const imageBase64 = 'data:image/png;base64,'
                    + imageBuffer.toString('base64');

                arr[i] = imageBase64;
            }

            const dataBase = {
                foodtypelist: [
                    {type: '美食', image: arr[0]},
                    {type: '早餐', image: arr[1]},
                    {type: '商超便利', image: arr[2]},
                    {type: '果蔬生鲜', image: arr[3]},
                    {type: '大牌5折', image: arr[4]},
                    {type: '甜品饮品', image: arr[5]},
                    {type: '医药健康', image: arr[6]},
                    {type: '浪漫鲜花', image: arr[7]},
                    {type: '麻辣烫', image: arr[8]},
                    {type: '地方菜系', image: arr[9]},
                    {type: '披萨意面', image: arr[10]},
                    {type: '新店特惠', image: arr[11]},
                ],
                storedetaillist: list,
            };
            app.get('/mock/*', (req, res) => {
                const urlObj = url.parse(req.url);
                console.log(urlObj.pathname);
                switch (urlObj.pathname) {
                case '/mock/getfoodtypelist':
                    res.setHeader('content-type',
                        'application/json;charset=utf-8');
                    res.write(JSON.stringify(dataBase['foodtypelist']));
                    res.end();
                    break;
                case '/mock/storedetaillist':
                    res.setHeader('content-type',
                        'application/json;charset=utf-8');
                    res.write(JSON.stringify(dataBase['storedetaillist']));
                    res.end();
                    break;
                default:
                    res.end('该接口暂未提供。');
                    break;
                }
            });
            app.post('/mock/*', (req, res) => {
                const urlObj = url.parse(req.url);
                let str = '';
                req.on('data', (chunk) => {
                    str += chunk;
                });
                req.on('end', () => {
                    const postParams = qs.parse(str);
                    let arr = [];
                    switch (urlObj.pathname) {
                    case '/mock/login':
                        res.end('这是个假接口');
                        break;
                    case '/mock/storedetaillist':
                        res.setHeader('content-type',
                            'application/json;charset=utf-8');
                        for (let i = 0; i < list.length; i++) {
                            if (list[i].type === postParams.type) {
                                arr = list[i].value;
                            }
                        }

                        res.write(JSON.stringify(arr));

                        res.end();
                        break;
                    default:
                        res.end('暂未提供。');
                        break;
                    }
                });
            });
        },
    },
    devtool: 'cheap-source-map',
};
