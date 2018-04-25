angular.module('bodyLeft',[])
        .directive('contentLeft',function(){
            return{
                restrict:"ECMA",
                templateUrl:'../../../component/template/bodyleft.html',
                controller:['$scope','$state',function($scope,$state){
                      $scope.index = 0;
                      $scope.oneAtATime = true;
                      $scope.listData = [
                          {
                              title:'考试管理',
                              value:[{
                                  title:'开始考试',
                                  routerName:'startExam'
                              },{
                                 title:'历史试卷',
                                 routerName:'historyPaper'
                              }]
                          },{
                              title:'工具下载',
                              value:[{
                                  title:'学习工具下载',
                                  routerName:'toolDownload'
                              }]
                          },{
                              title:'错题管理',
                              value:[{
                                  title:'上传错题图片',
                                  routerName:'errorQuestionManager'
                              }]
                          },{
                              title:'图片管理',
                              value:[{
                                  title:'添加图册',
                                  routerName:'addPicture'
                              },{
                                  title:'相册列表',
                                  routerName:'photoList'
                              },{
                                  title:'添加图片',
                                  routerName:'addPhoto'
                              }]
                          }
                      ]
                      $scope.go = function(option){
                          $state.go(option.routerName)
                          $scope.$parent.currentRoute = option.title;
                      }
                      $scope.changeInd = function(index){
                        $scope.index = index;
                      }
                }]
            }
        })
