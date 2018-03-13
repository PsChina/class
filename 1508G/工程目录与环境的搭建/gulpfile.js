
var gulp = require('gulp')
var browserify = require('browserify') // 引入js 的
var source = require('vinyl-source-stream') // 合并js 的
var buffer = require('vinyl-buffer') //转流的
var rev = require('gulp-rev') // 生成md5后缀的 和对应关系
var collector = require('gulp-rev-collector') // 自动替换路径的
var connect = require('gulp-connect') //启服务
var watch = require('gulp-watch') //监听文件变化的
var webserver = require('gulp-webserver') //mock数据

var urlTool = require('url')
var qs = require('qs')
var fs = require('fs')

var examData = JSON.parse(fs.readFileSync(__dirname + '/dataBase/examlist.json').toString())
var historypaper = JSON.parse(fs.readFileSync(__dirname + '/dataBase/historypaper.json').toString())
/**
 * 使用es6编写 环境搭建
 */
var babel = require('babelify')

gulp.task('connect', function () {
    connect.server({
        port: 8080,
        livereload: true
    });
})

gulp.task('concatJS', function (callback) {
    browserify({
        entries: ['./js/common/entry.js'],
        transform: ['babelify']
    }).transform(babel)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(rev()) //生成md5后缀
        .pipe(gulp.dest('./dist/'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('./'))
        .on('end', callback);
})

gulp.task('replaceSrc', ['concatJS'], function (callback) {
    gulp.src(['./index.html', './rev-manifest.json'])
        .pipe(collector({
            replaceReved: true
        }))
        .pipe(gulp.dest('./'))
        .on('end', callback)
})

gulp.task('refreshBrowser', ['replaceSrc'], function () {
    gulp.src('.')
        .pipe(connect.reload())
})

gulp.task('watch', function () {
    gulp.watch ( [ './index.html' , './css/*.css' , './dist/*.js' ] , [ 'refreshBrowser' ] );
    gulp.watch ( [ './js/*/*.js' ] , [ 'concatJS' , 'replaceSrc' , 'refreshBrowser' ] );
    gulp.watch( [ './js/*/*/*.js' ] , [ 'concatJS' , 'replaceSrc' , 'refreshBrowser' ] );
    gulp.watch( [ './component/*/*.html' ] , [ 'concatJS' , 'replaceSrc' , 'refreshBrowser' ] );
})

gulp.task('mockServer', function () {
    gulp.src('.')
        .pipe(webserver({
            port: 3000,
            host: '169.254.206.26',
            middleware: function (req, res, next) {
                var method = req.method,
                    url = req.url,
                    urlObj = urlTool.parse(url),
                    pathname = urlObj.pathname,
                    getParams = urlObj.query
                res.setHeader('Access-Control-Allow-Origin', '*')
                if (method === 'GET') {
                    switch (pathname) {
                        case '/examlist':
                            res.setHeader('content-type', 'application/json;charset=utf-8');
                            res.write(JSON.stringify(examData));
                            res.end();
                            break;
                        case '/historypaper':
                            res.setHeader('content-type', 'application/json;charset=utf-8');
                            res.write(JSON.stringify(historypaper));
                            res.end();
                            break;
                        default:
                            break;
                    }

                } else if (method === 'POST') {
                    var postDataStr = '';
                    req.on('data', function (chunk) {
                        postDataStr += chunk;
                    })

                    req.on('end', function () {
                        var postData = {}

                        try {
                            if (postDataStr.indexOf('{') !== -1 && postDataStr.indexOf('}') !== -1) {

                                postData = JSON.parse(postDataStr);

                            } else {

                                postData = fs.parse(postDataStr);

                            }
                        } catch (error) {
                            throw new Error(error)
                        } finally {


                            switch (pathname) {
                                case '/deleteExam':
                                    var examName = postData.examName;
                                    examData.forEach(function (value, index, array) {
                                        if (examName == value.examName) {
                                            array.splice(index, 1);
                                        }
                                    });
                                    fs.writeFileSync(__dirname + '/dataBase/examlist.json', JSON.stringify(examData))
                                    res.setHeader('content-type', 'application/json;charset=utf-8')
                                    var msg = {
                                        state: 1
                                    }
                                    res.write(JSON.stringify(msg));
                                    res.end();

                                    break;
                                case '/editHistoryPaper':
                                    historypaper = postData;
                                    fs.writeFileSync(__dirname+'/dataBase/historypaper.json',JSON.stringify(postData))
                                    res.setHeader('content-type','application/json;chart=utf-8')
                                    var msg = {
                                        state:1
                                    }
                                    res.write(JSON.stringify(msg));
                                    res.end()
                                break;
                                case '/singlePageData':
                                    var index = postData.pageIndex;
                                    var number = postData.number;
                                    var obj = historypaper.slice((index-1)*number,(index)*number);
                                    res.setHeader('content-type','application/json;charset=utf-8');
                                    res.write(JSON.stringify(obj));
                                    res.end();
                                break;
                                default:
                                    res.end('No such api');
                                    break;
                            }

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

gulp.task('default', ['mockServer', 'connect', 'concatJS', 'replaceSrc', 'refreshBrowser', 'watch'])

