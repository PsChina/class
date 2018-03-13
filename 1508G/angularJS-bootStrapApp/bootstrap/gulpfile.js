var gulp = require('gulp')
var webserver = require('gulp-webserver')
var connect = require('gulp-connect')
var url = require('url')
var qs = require('querystring')
var fs = require('fs')
var Mock = require('mockjs')

var buffer = fs.readFileSync('./dataBase/dataBase.json');

var dataBase = {};

if (buffer.length) {
    dataBase = JSON.parse(buffer.toString());
} else {
    dataBase = {
        users: []
    }
}


var examPaperListBuffer = fs.readFileSync('./dataBase/examPaperList.json')

var examPaperListData = JSON.parse(examPaperListBuffer.toString());


var historyListBuffer = fs.readFileSync('./dataBase/historyPaperList.json')

var historyListData = JSON.parse(historyListBuffer.toString());

var data = Mock.mock({
    'list|60': [
        {
            'name': '高级程序开发',
            'time|+3600000': new Date().getTime(),
            'score|80-100.1': 1
        }
    ]
})

var userId;
var userName;
function login(account, password) {

    var exist = false;

    var success = false;

    var users = dataBase['users'];

    for (var i = 0, length = users.length; i < length; i++) {

        if (account == users[i].user) {
            exist = true;
            if (users[i].password == password) {
                success = true;
                userId = users[i].id;
                userName = users[i].userName;
            }
            break;
        }

    }

    return exist ? { success: success } : exist;
}


gulp.task('mockServer', function () {
    gulp.src('.')
        .pipe(webserver({
            port: 3000,
            middleware: function (request, response, next) {
                response.setHeader('Access-Control-Allow-Origin', '*')
                var method = request.method,
                    urlObj = url.parse(request.url),
                    pathname = urlObj.pathname,
                    query = urlObj.query;

                if (method === 'GET') {

                } else if (method === "POST") {

                    var postData = '';

                    request.on('data', function (chunk) {
                        postData += chunk;
                    })

                    request.on('end', function () {

                        var params = {};

                        if (postData.indexOf('{') != -1 && postData.indexOf('}') != -1) {
                            params = JSON.parse(postData);
                        } else {
                            params = qs.parse(postData);
                        }


                        switch (pathname) {
                            case '/examPaperList':
                                response.setHeader('content-type', 'application/json');
                                response.write(JSON.stringify(examPaperListData));
                                response.end();
                                break;
                            case '/historyPaperList':
                                response.setHeader('content-type', 'application/json');
                                var id = params.id;
                                var array = historyListData[id];
                                response.write(JSON.stringify(array));
                                response.end();
                                break;
                            case '/getMaxpage':
                                //最大页 = 向上取整(数据库中数据的条数/前端每页显示的条数) ;
                                var id = params.id;
                                var maxPage = Math.ceil(historyListData[id].length / params.number);
                                var d = {
                                    maxPage: maxPage
                                }
                                response.setHeader('content-type', 'application/json;charset=utf-8;')
                                response.write(JSON.stringify(d))
                                response.end()
                                break;
                            case '/getDataWithIndex':
                                console.log('前端请求第' + params.index + '页的数据');
                                response.setHeader('content-type', 'application/json');
                                // 根据 前端发过来的页面索引返回 指定页面的数据
                                var index = params.index;
                                var number = params.number;
                                var id = params.id;
                                var array = historyListData[id];
                                console.log(params,historyListData,array);
                                var result = array.slice((index - 1) * number, index * number);
                                response.write(JSON.stringify(result));
                                response.end();
                                break;
                            case '/deletedDataWithValue':
                                var value = params.value;
                                var id = params.id;
                                var array = historyListData[id]
                                for (var i = 0; i < array.length; i++) {
                                    
                                    if (array[i]['name'] == value) {
                                        array.splice(i, 1);
                                        fs.writeFileSync('./dataBase/historyPaperList.json', JSON.stringify(historyListData));
                                        response.setHeader('content-type', 'application/json;charset=utf-8');
                                        var page = params.page;
                                        var number = params.number;
                                        var array = array.slice((page - 1) * number, page * number);
                                        var maxPage = Math.ceil(array.length / number);
                                        var d = {
                                            maxPage: maxPage,
                                            array: array
                                        }
                                        response.write(JSON.stringify(d));
                                        response.end();
                                    }
                                }

                                break;
                            case '/login':

                                //3.告诉前端你要返回什么类似的数据给他
                                response.setHeader('content-type', 'application/json;charset=utf-8')
                              
                                var exist = login(params.userName, params.password)
                                var d;
                                if (exist) {

                                    if (exist.success) {
                                        //4.写数据
                                        d = {
                                            id:userId,
                                            msg:1,
                                            userName:userName
                                        }
                                        
                                    } else {
                                        //4.写数据
                                        d = {
                                            id:null,
                                            msg:0
                                        }
                                        
                                    }

                                } else {
                                    d = {
                                        id:null,
                                        msg:-1
                                    }
                                   
                                }
                                //5. 结束响应;
                                console.log(d)
                                response.write(JSON.stringify(d))
                                response.end()
                                break;
                            default:
                                break;
                        }



                    })

                } else if (method === "OPTIONS") {
                    response.writeHead(200, {
                        "Content-Type": "application/json",
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET, POST, PUT,DELETE',
                        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
                    });
                    response.end();
                }
            }
        }))
})

gulp.task('httpServer', function () {
    connect.server({
        port: 8080,
        livereload: true
    })
})


gulp.task('default', ['mockServer', 'httpServer'])