/**
 * Created by liu on 2015/12/1.
 */
var lukeAdmin = angular.module('lukeAdmin',[]);
lukeAdmin.controller('adminLogin',function($scope,$http){
    $scope.user = {'userName':'','password':''};
    $scope.commitUser = function(user){
        $http({
            url:"http://192.168.1.88:8080/palmstek/servlet/Login",
            method:"POST",
            headers:{'Content-Type': 'application/x-www-form-urlencoded'},
            data:user,
        }).success(function(data,header,config,status){
            console.log("data:"+data+"header:"+header+"config:"+config+"status:"+status);
        }).error(function(data,header,config,status){
            console.log("data:"+data+"header:"+header+"config:"+config+"status:"+status);
        });
    };
});

