/* 
  ie 9+
  using 1.3
*/
var myApp = angular.module("myApp",[]);

myApp.controller("formCtrl",["$scope", function($scope){
  
  $scope.submitForm = function(){
    if($scope.form.$valid){
      alert("Form Submitted!");
    }
  }
  
}]);