app.config(['$stateProvider',function($stateProvider){
    $stateProvider.state('startexam',{
        url:'/startexam',
        templateUrl:'./src/template/router/startexam.html',
        controller:['$scope','data','$http','base',function($scope,data,$http,base){
            $scope.data = data;
            $scope.delete = function(item){
                $http({
                    url:base.url+'/deleteexam',
                    method:'POST',
                    data:'userId=001&id='+item.id
                })
                .then(function(result){
                    if( result.data.state === 1 ){
                        angular.forEach($scope.data,function(value,index,arr){
                            if(value === item) {
                                 arr.splice(index,1);
                            }
                         })
                    }else{
                        console.log('删除失败')
                    }
                },function(error){
                    throw error
                })

            }
        }],
        resolve:{
            data:['$http','base',function($http,base){
                return $http({url:base.url+'/startexam'})
                .then(function(result){
                    return result.data;
                },function(error){
                    throw error;
                })
            }]
        }
    }).state('history',{
        url:'/history',
        templateUrl:'./src/template/router/history.html',
        controller:['$scope','data','maxPage','pageControlManager',function($scope,data,maxPage,pageControlManager){
            $scope.maxPage = maxPage;
            $scope.manager = pageControlManager;
            pageControlManager.initArray($scope.maxPage,$scope);
        }],
        resolve:{ //解决器
            data:['$http','base',function($http,base){
                return $http({url:base.url+'/history'})
                .then(function(result){
                    return result.data;
                },function(error){
                    throw error;
                })
            }],
            maxPage:['$http','base','appValue',function($http,base,appValue){
                return $http({url:base.url+'/listlength'})
                .then(function(result){
                    return Math.ceil(result.data.length/appValue.pageNum);
                },function(error){
                    throw error;
                })
            }]
        }
    }).state('tooldownload',{
        url:'/tooldownload',
        templateUrl:'./src/template/router/tooldownload.html',
        controller:['$scope',function($scope){
            
        }]
    }).state('uploadimage',{
        url:'/uploadimage',
        templateUrl:'./src/template/router/uploadimage.html',
        controller:['$scope',function($scope){
            
        }]
    }).state('album',{
        url:'/album',
        templateUrl:'./src/template/router/album.html',
        controller:['$scope',function($scope){
            
        }]
    }).state('addalbum',{
        url:'/addalbum',
        templateUrl:'./src/template/router/addalbum.html',
        controller:['$scope',function($scope){
            
        }]
    }).state('addpicture',{
        url:'/addpicture',
        templateUrl:'./src/template/router/addpicture.html',
        controller:['$scope',function($scope){
            
        }]
    })
}])






// data:['$http',function($http){

//     function fn(obj){
//         return $http(obj)
//         .then(function(result){
//             return result.data;
//         },function(error){
//             throw error;
//         })
//     }
    
//     return fn;
// }],