var gulp = require('gulp');
var webserver = require('gulp-webserver');
var urlTool = require('url');
var qs = require('qs');

gulp.task('mockServer', function () {
    gulp.src('.')
        .pipe(webserver({
            port: 3000,
            middleware: function (req, res, next) {
                /**
                 * 允许跨域
                 */
                res.setHeader('Access-Control-Allow-Origin', '*');

                /**
                 * 获取请求方式
                 */
                var method = req.method;

                /**
                 * pathname的解析
                 */
                var url = req.url,
                    urlObj = urlTool.parse(url),
                    pathname = urlObj.pathname;

                /**
                 * get 请求的参数解析
                 */
                var getParamsStr = urlObj.query,
                    getParams = qs.parse(getParamsStr);


                if (method == "GET") {

                    /**
                     * 根据 pathname 和 getParams 来响应前端
                     */
                    switch (pathname) {
                        case '/home':
                            res.setHeader('Content-Type', 'application/json');

                            var json = {
                                data: [1, 2, 3, 4, 5]
                            }

                            res.write(JSON.stringify(json))
                            res.end();
                            break;
                        default:
                            break;
                    }

                } else if (method == "POST") {

                    /**
                     * post请求的参数解析
                     */
                    var postDateStr = '';
                    req.on('data', function (chunk) {
                        postDateStr += chunk;
                    })
                    req.on('end', function () {
                        var postData = {};

                        if (postDateStr.indexOf('{') != -1 && postDateStr.indexOf('}') != -1) {
                            postData = JSON.parse(postDateStr);
                        } else {
                            postData = qs.parse(postDateStr);
                        }
                        // 解析完成

                        /**
                         * 根据 pathname 和 postData 来响应前端
                         */
                        switch (pathname) {
                            case '/about':
                                res.setHeader('Content-Type', 'application/json');

                                var json = {
                                    data: ['one','two'],
                                    undata:[6,7,8,9,10]
                                }

                                res.write(JSON.stringify(json[postData.attribute]))
                                res.end();
                                break;
                            default:
                                break;
                        }

                    })


                } else if (method == "OPTIONS") {
                    // res.setHeader('Content-Type','application/json');
                    res.setHeader('Access-Control-Allow-Origin', '*');
                    res.setHeader('Access-Control-Allow-Methods', 'PUT,DELETE,POST,GET');
                    res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');
                    // res.writeHead(200,{
                    //     "Content-Type":"application/json",
                    //     'Access-Control-Allow-Origin':'*',
                    //     'Access-Control-Allow-Methods': 'GET, POST, PUT,DELETE',
                    //     'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
                    // });
                    res.end();
                }

            }
        }))
})


gulp.task('default',['mockServer']);