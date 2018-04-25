angular.module('constValue',[])
        .constant('url',{
            base:'http://169.254.206.26:3000',
            examlist:'http://169.254.206.26:3000/examlist',
            historypaper:'http://169.254.206.26:3000/historypaper',
            deleteExam:'http://169.254.206.26:3000/deleteExam'
        })