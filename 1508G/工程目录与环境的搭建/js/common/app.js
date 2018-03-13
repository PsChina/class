import './controller/mainController'
import './directive/header'
import './directive/body'
import './directive/body-left'
import './directive/body-right'
import './directive/pagecontrol'
export default angular.module('bootstrapApp',['ui.router','ngAnimate','ui.bootstrap','mainController','header','body','bodyLeft','bodyRight','pagecontrol'])
        .config(['$stateProvider',($stateProvider)=>{
                $stateProvider.state('startExam',{
                        url:'/startexam',
                        templateUrl:'../../component/routertemplate/startexam.html',
                        controller:['$scope','data','deleteExam',($scope,data,deleteExam)=>{
                                $scope.examlist = data;
                                $scope.deleteExam = function(examName){
									deleteExam(examName,$scope)
								}
                        }],
                        resolve:{
                                data:['$http',($http)=>{
                                        return $http({
                                                url:'http://169.254.206.26:3000/examlist'
                                        }).then((result)=>{
                                                return result.data;
                                        },(error)=>{
                                                return error;
                                        })
								}],
								deleteExam:['$http',($http)=>{
									return (examName,scope)=>{
										$http({
											url:'http://169.254.206.26:3000/deleteExam',
											method:'POST',
											data:{
												examName
											}
										}).then((result)=>{

											angular.forEach(scope.examlist,function(value,index,array){
												if(examName == value.examName){
													array.splice(index,1);
												}
											})

										},(error)=>{
											throw new Error(error);
										})
									}
								}]
                        }
                }).state('historyPaper',{
                        url:'/historypaper',
                        templateUrl:'../../component/routertemplate/historypaper.html',
                        controller:['$scope','historyData','$http',($scope,historyData,$http)=>{
							$scope.data = historyData;
							$scope.edit = function(event,item){
								item.flag = !item.flag;
								var target = event.target
								if(target.innerText == '编辑'){
									target.innerText = '保存';
									var date = new Date(item.examTime);
									item.showTime = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes()+':'+date.getSeconds()
								} else {
									target.innerText = '编辑';
									$http({
										url:'http://169.254.206.26:3000/editHistoryPaper',
										method:'POST',
										data:$scope.data
									})
									.then((result)=>{
										if(result.data.state == 1){
											console.log('编辑成功')
										}
									},(error)=>{
										console.log(error)
										console.log('编辑失败')
										window.location.reload();
										
									})
								}
							}
							$scope.changeTime = function(item){
								item.examTime = new Date(item.showTime).getTime();
							}
						}],
						resolve:{
							historyData:['$http',function($http){
								return $http({
									url:'http://169.254.206.26:3000/historypaper'
								})
								.then((result)=>{
									return result.data;
								},(error)=>{
									throw new Error(error);
								})
							}]
						}
                }).state('toolDownload',{
                        url:'/tooldownload',
                        templateUrl:'../../component/routertemplate/tooldownload.html',
                        controller:['$scope',($scope)=>{
                                
                        }]
                }).state('uploadQusetion',{
                        url:'/uploadqusetion',
                        templateUrl:'../../component/routertemplate/uploadqusetion.html',
                        controller:['$scope',($scope)=>{
                                
                        }]
                }).state('addAlbum',{
                        url:'/addalbum',
                        templateUrl:'../../component/routertemplate/addalbum.html',
                        controller:['$scope',($scope)=>{
                                
                        }]
                }).state('photoList',{
                        url:'/photolist',
                        templateUrl:'../../component/routertemplate/photolist.html',
                        controller:['$scope',($scope)=>{
                                
                        }]
                }).state('addPhoto',{
                        url:'/addphoto',
                        templateUrl:'../../component/routertemplate/addphoto.html',
                        controller:['$scope',($scope)=>{
                                
                        }]
                })
        }])
        .run([()=>{

        }])