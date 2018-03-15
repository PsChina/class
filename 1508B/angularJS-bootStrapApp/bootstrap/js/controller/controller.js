
angular.module('bootstrapApp', ['ui.bootstrap', 'ngAnimate', 'ui.router','pageControl'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('startExam', {
            url: '/startexam',
            templateUrl: './template/startexam.html',
            controller: ['$scope', 'data', '$state','$rootScope', function ($scope, data, $state,$rootScope) {
                $rootScope.pageName = '学生参加考试列表'
                $scope.data = data;
                $scope.startLilun = function (name) {
                  var t =  document.createElement('div')

                  angular.element(t).css({
                    position:'fixed',
                    top:0,
                    left:0,
                    bottom:0,
                    right:0,
                    zIndex:99,
                    background:'white',
                    fontSize:'16px'
                  }).html('这是'+name+'理论考试题')

                  document.documentElement.appendChild(t);

                }
                $scope.startCoding = function (name) {
                    var t =  document.createElement('div')
                    angular.element(t).css({
                        position:'fixed',
                        top:0,
                        left:0,
                        bottom:0,
                        right:0,
                        zIndex:99,
                        background:'white',
                        fontSize:'16px'
                      }).html('这是'+name+'机试题')

                      document.documentElement.appendChild(t);
                }
            }],
            resolve: {
                data: ['$http', function ($http) {

                    return $http({
                        url: 'http://localhost:3000/examPaperList',
                        method: 'POST'
                    })
                        .then(function (result) {
                            console.log(result)
                            return result.data;
                        }, function (error) {
                            return error;
                        })

                }]
            }
        })
            .state('historyTestPaper', {
                url: '/historytestpaper',
                templateUrl: './template/historyView.html',
                controller:['$rootScope','data','$scope','$http',function($rootScope,data,$scope,$http){
                    $rootScope.pageName = '历史试卷'
                   $scope.currentPage=1;
                    $http({
                        url:'http://localhost:3000/getMaxpage',
                        method:'POST',
                        data:{
                            number:4,
                            id:sessionStorage.userId
                        }
                    }).then(function(result){
                        $scope.maxPage = result.data.maxPage;
                    },function(error){
                        throw new Error(error);
                    })

                    $scope.maxPage=0;
                    $scope.data = data;
                    $scope.deleteData = function(name){
                        console.log($scope.currentPage)
                        $http({
                            url:'http://localhost:3000/deletedDataWithValue',
                            method:'POST',
                            data:{
                                value:name,
                                page:$scope.currentPage,
                                number:4,
                                id:sessionStorage.userId
                            }
                        }).then(function(result){

                            $scope.data =result.data.array;
                            $scope.maxPage = result.data.maxPage;

                        },function(error){
                            throw new Error(error);
                        })
                    }
                }],
                resolve:{
                    data:['$http',function($http){
                        console.log({
                            index:1,
                            number:4,
                            id:sessionStorage.userId
                        });
                        return $http({
                            url:'http://localhost:3000/getDataWithIndex',
                            method:'POST',
                            data:{
                                index:1,
                                number:4,
                                id:sessionStorage.userId
                            }
                        })
                        .then(function(result){
                            return result.data;
                        },function(error){
                            return error;
                        })

                    }]
                }
            }).state('toolDownload', {
                url: '/tooldownload',
                template: '<div>学习工具下载</div>',
                controller:['$rootScope',function($rootScope){
                    $rootScope.pageName = '学习工具下载'
                }]
            }).state('uploadImage', {
                url: '/uploadimage',
                template: '<div>上传错题图片</div>',
                controller:['$rootScope',function($rootScope){
                    $rootScope.pageName = '上传错题图片'
                }]
            }).state('addPhotoAlbum', {
                url: '/addphotoalbum',
                template: '<div>上传错题图册</div>',
                controller:['$rootScope',function($rootScope){
                    $rootScope.pageName = '上传错题图册'
                }]
            }).state('photoAlbumList', {
                url: '/photoalbumlist',
                template: '<div>相册列表</div>',
                controller:['$rootScope',function($rootScope){
                    $rootScope.pageName = '相册列表'
                }]
            }).state('addImage', {
                url: '/addimage',
                template: '<div>添加图片</div>',
                controller:['$rootScope',function($rootScope){
                    $rootScope.pageName = '添加图片'
                }]
            })
            // .state('lilun', {
            //     url: '/lilun',
            //     template: '<div>这是{{name}}理论考试试卷</div>',
            //     controller: ['$stateParams','$scope', function ($stateParams,$scope) {
            //         $scope.name = $stateParams.key
            //     }],
            //     params:{
            //         key:'高级程序开发1'
            //     }
            // })
            // .state('coding', {
            //     url: '/coding',
            //     template: '<div>这是{{name}}机试题</div>',
            //     controller: ['$stateParams','$scope', function ($stateParams,$scope) {
            //         $scope.name = $stateParams.key
            //     }],
            //     params:{
            //         key:'高级程序开发1'
            //     }
            // })
    }])
    .run([function(){ //相当于 $rootScope 的 controller

    }])
    .controller('main', ['$scope','$http', function ($scope,$http) {
        $scope.msg = 'hello'
        $scope.userName = 'admin';
        
        $scope.array = [
            {
                title: '考试管理',
                value: [{
                    name: '开始考试',
                    router: 'startExam'
                }, {
                    name: '历史试卷',
                    router: 'historyTestPaper'
                }]
            }, {
                title: '工具下载',
                value: [{
                    name: '学习工具下载',
                    router: 'toolDownload'
                }]
            },
            {
                title: '错题管理',
                value: [{
                    name: '上传错题图片',
                    router: 'uploadImage'
                }]
            }, {
                title: '图片管理',
                value: [{
                    name: '添加图册',
                    router: 'addPhotoAlbum'
                }, {
                    name: '相册列表',
                    router: 'photoAlbumList'
                }, {
                    name: '添加图片',
                    router: 'addImage'
                }]
            }
        ]
        if(sessionStorage.userId){
            $scope.isNotLogin = false;
        } else {
            $scope.isNotLogin = true;
        }
        $scope.login = function(){
            
            //拿到 账号密码.
            console.log($scope.account,$scope.password)
            //发送登录请求.
            $http({
                url:'http://localhost:3000/login',
                method:'POST',
                data:{
                    userName:$scope.account,
                    password:$scope.password
                }
            })
            //接收登录结果.
            .then(function(result){
                console.log(result)
                //如果成功 那么就让遮罩层消失.
                switch(result.data.msg){
                    case 0:
                    console.log('账号或密码错误')
                    $scope.resMsg = '账号或密码错误';
                    break;
                    case 1:
                    console.log('登录成功',result.data)
                    $scope.isNotLogin = false;
                    $scope.userName = result.data.userName;
                    sessionStorage.userId = result.data.id;
                    break;
                    case -1:
                    console.log('账号不存在，请注册。')
                    $scope.resMsg = '账号不存在，请注册。';
                    break;
                    default:
                    throw new Error('一个未知的信息被服务器返回');
                    break;
                }
            },function(error){
                //如果失败 就提示错误信息给用户.
                throw new Error(error);
            })
            
            
        }
        $scope.logout=function(){
            console.log('退出登录',sessionStorage.userId)
            sessionStorage.userId = '';
            $scope.isNotLogin = true;

        }
    }])
    .controller('content', ['$scope', function ($scope) {
        // $scope.pageName =""
    }])

angular.bootstrap(document.documentElement, ['bootstrapApp'])

