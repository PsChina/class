app.controller('main',['$scope',function($scope){
    $scope.logo = './src/img/logo.png';
    $scope.title= '八维考试系统';
    $scope.data = {
        iconfont:'icon-yonghu',
        wellcome:'欢迎光临',
        userName:'杉杉',
        list:['个人信息','修改密码','退出']
    }
    $scope.list = [
        { title:'考试管理',value:[{ text:'开始考试',routeName:'startexam' },{ text:'历史试卷',routeName:'history' }] },
        { title:'工具下载',value:[{ text:'学习工具下载',routeName:'tooldownload' }] },
        { title:'错题管理',value:[{ text:'上传错题图片',routeName:'uploadimage' }] },
        { title:'图片管理',value:[{ text:'添加图册',routeName:'addalbum' },{ text:'相册列表',routeName:'album' },{ text:'添加图片',routeName:'addpicture' }] } ]
}]);