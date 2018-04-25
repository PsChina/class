
var gulp = require('gulp');
var browserify = require('browserify'); // 引入js 
var source = require('vinyl-source-stream'); // 合并
var buffer = require('vinyl-buffer'); // 转流
var rev = require('gulp-rev'); // 生成md5后缀 和对饮关系
var collector = require('gulp-rev-collector'); //自动替换路径
var connect = require('gulp-connect'); //启服务
var watch = require('gulp-watch'); // 监听文件变化
var webserver = require('gulp-webserver') //mock数据
var urlTool = require('url');
var qs = require('qs');
var fs = require('fs');


var data = JSON.parse(fs.readFileSync(__dirname + '/dataBase/examlist.json').toString())
var historyData = JSON.parse(fs.readFileSync(__dirname + '/dataBase/historypaper.json').toString())

gulp.task('httpServer', function () {
    connect.server({
        port: 8080,
        livereload: true
    })
})

gulp.task('refreshBrowser', ['replaceSrc'], function () {
    gulp.src('.')
        .pipe(connect.reload())
})

gulp.task('module', function (callback) {
    browserify({
        entries: ['./js/common/entry.js']
    }).bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(rev())
        .pipe(gulp.dest('./dist/'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('./'))
        .on('end', callback)
})

gulp.task('replaceSrc', ['module'], function (callback) {
    gulp.src(['./index.html', 'rev-manifest.json'])
        .pipe(collector({
            replaceReved: true
        }))
        .pipe(gulp.dest('./'))
        .on('end', callback)
})

gulp.task('watch', function () {
    gulp.watch(['./index.html', './css/*/*.css'], ['refreshBrowser'])
    gulp.watch(['./js/*/*.js', './js/*/*/*.js', './component/*/*.html'], ['module', 'replaceSrc', 'refreshBrowser'])
})


gulp.task('mockServer', function () {
    gulp.src('.')
        .pipe(webserver({
            port: 3000,
            host:'169.254.206.26',
            middleware: function (req, res, next) {
                var method = req.method,
                    url = req.url,
                    urlObj = urlTool.parse(url),
                    getParamsStr = urlObj.query,
                    pathname = urlObj.pathname,
                    getParams = qs.parse(getParamsStr)


                res.setHeader('Access-Control-Allow-Origin', '*');
                if (method === 'GET') {

                    switch (pathname) {
                        case '/getMaxPage':
                            console.log(getParams);
                            var pageNumber = 0;
                            pageNumber  = Math.ceil(historyData.length/getParams.number); 
                            res.setHeader('Content-type', 'application/json;charset=utf-8')
                            res.write( String(pageNumber) )
                            res.end()
                            break;
                        case '/examlist':
                            res.setHeader('Content-type', 'application/json;charset=utf-8')
                            res.write(JSON.stringify(data))
                            res.end();
                            break;
                        case '/historypaper':
                            res.setHeader('Content-type', 'application/json;charset=utf-8')
                            res.write(JSON.stringify(historyData))
                            res.end();
                            break;
                        default:
                            res.setHeader('Content-type', 'application/json;charset=utf-8')
                            res.end('路径错误');
                            break;
                    }

                } else if (method === 'POST') {
                    var postDataStr = '';
                    req.on('data', function (chunk) {
                        postDataStr += chunk;
                    })
                    req.on('end', function () {
                        var postData = {};
                        if (postDataStr.indexOf('{') !== -1 && postDataStr.indexOf('}') !== -1) {
                            postData = JSON.parse(postDataStr);
                        } else {
                            postData = qs.parse(postDataStr);
                        }

                        switch (pathname) {
                            case '/deleteExam':

                                data.forEach(function (value, index, array) {
                                    if (value.examName === postData.examname) {
                                        data.splice(index, 1);
                                    }
                                });

                                fs.writeFileSync(__dirname + '/dataBase/examlist.json', JSON.stringify(data))

                                res.setHeader('Content-type', 'application/json;charset=utf-8')

                                var msg = {
                                    state: 1
                                }

                                res.write(JSON.stringify(msg))

                                res.end();
                                break;
                            case '/editHistoryPaper':
                                historyData = postData;
                                fs.writeFileSync(__dirname+'/dataBase/historypaper.json',JSON.stringify(postData));
                                var successMsg = {
                                    state:1
                                }
                                res.write(JSON.stringify(successMsg));
                                res.end()
                            break;
                            case '/getSinglePageData':
                                var index = postData.index;
                                var number = postData.number;

                                var singlePageDate = historyData.slice((index-1)*number,index*number);

                                res.setHeader('content-type','application/json;charset=utf-8');
                                res.write(JSON.stringify(singlePageDate));
                                res.end();
                            break;
                            default:
                                res.end('No such api');
                                break;
                        }

                    })

                } else if (method === 'OPTIONS') {
                    res.writeHead(200, {
                        "Content-Type": "application/json",
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET, POST, PUT,DELETE',
                        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
                    });
                    res.end();
                }
            }
        }))
})

gulp.task('default', ['mockServer', 'httpServer', 'module', 'replaceSrc', 'refreshBrowser', 'watch'])
