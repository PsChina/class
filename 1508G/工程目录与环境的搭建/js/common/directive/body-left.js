export default angular.module('bodyLeft', [])
    .directive('contentLeft', () => {
        return {
            restrict: 'ECMA',
            templateUrl: '../../../component/template/bodyleft.html',
            controller: ['$scope','$state',($scope,$state) => {
                $scope.oneAtATime = true;
                $scope.listData = [{
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
                        routerName:'uploadQusetion'
                    }]
                },{
                    title:'图片管理',
                    value:[{
                        title:'添加相册',
                        routerName:'addAlbum'
                    },{
                        title:'相册列表',
                        routerName:'photoList'
                    },{
                        title:'添加图片',
                        routerName:'addPhoto'
                    }]
                }]

                $scope.go = function(content){
                    $state.go(content.routerName)
                }
            }]
        }
    })