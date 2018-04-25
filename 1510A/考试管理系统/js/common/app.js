angular.module('bootstrapApp', ['ui.bootstrap', 'ui.router', 'ngAnimate', 'mainController', 'header', 'body', 'bodyLeft', 'bodyRight', 'constValue','pagecontrol'])
	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/startexam');
		$stateProvider.state('startExam', {
			url: '/startexam',
			templateUrl: '../../component/routertemplate/startexam.html',
			controller: ['$scope', 'data', '$http', 'url','$timeout', function ($scope, data, $http, url,$timeout) {
				$scope.examlist = data;

				$scope.delete = function (examname) {
					var tempArray = [];
					var arr = $scope.examlist;
					for(var i=0 ,length =arr.length ; i<length; i++){
						tempArray.push(arr[i])
					}

					angular.forEach($scope.examlist, function (value, index, array) {
						if (value.examName === examname) {
							array.splice(index, 1);
						}
					})

					// 发送 网络请求 修改后台数据
					$http({
						url: url.deleteExam,
						method: 'POST',
						data: {
							examname: examname
						}
					}).then(function (result) {
						if(result.state == 1){
							console.log('删除成功')
						}
					}, function (error) {
						throw new Error(error)
						$scope.examlist = tempArray;
					})
				}
			}],
			resolve: {
				data: ['$http','url', function ($http,url) {

					 	return $http({
							 url:url.examlist
						 }).then(function (result) {
							return result.data;
						}, function (error) {
							return error;
						})
				}]
			}
		}).state('historyPaper', {
			url: '/historypaper',
			templateUrl: '../../component/routertemplate/historypaper.html',
			controller: ['$scope','getHistoryPaper','$http', function ($scope,getHistoryPaper,$http) {
				$scope.data = getHistoryPaper ;

				$scope.edit = function(event,item){
					if(event.target.innerText == '编辑'){
						event.target.innerText = '保存'
						item.flag = true;
						var date = new Date(item.examTime)
						item.showTime = date.getFullYear()+'-'+date.getMonth()+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()
					}else {
						event.target.innerText = '编辑'
						item.flag = false;
						$http({
							method:'post',
							url:'http://169.254.206.26:3000/editHistoryPaper',
							data:$scope.data
						})
						.then(function(result){
							console.log(result.data);
						},function(error){
							throw new Error(error);
						})
					}
				}
				$scope.changeTime = function(item){
					var date = new Date(item.showTime);
					item.examTime = date.getTime();
				}
			}]
			,
			resolve:{
				getHistoryPaper:['$http','url',function($http,url){
					return $http({
						url:url.historypaper
					}).then(function(result){
						return result.data;
					},function(error){
						throw new Error(error)
					})

				}]
			}
		}).state('toolDownload', {
			url: '/tooldownload',
			templateUrl: '../../component/routertemplate/tooldownload.html',
			controller: ['$scope', function ($scope) {

			}]
		}).state('errorQuestionManager', {
			url: '/errorquestionmanager',
			templateUrl: '../../component/routertemplate/errorquestionmanager.html',
			controller: ['$scope', function ($scope) {

			}]
		}).state('addPicture', {
			url: '/addpicture',
			templateUrl: '../../component/routertemplate/addpicture.html',
			controller: ['$scope', function ($scope) {

			}]
		}).state('photoList', {
			url: '/photolist',
			templateUrl: '../../component/routertemplate/photolist.html',
			controller: ['$scope', function ($scope) {

			}]
		}).state('addPhoto', {
			url: '/addphoto',
			templateUrl: '../../component/routertemplate/addphoto.html',
			controller: ['$scope', function ($scope) {
			}]
		})
	}])
	.run([function () {

	}])