angular.module("my-app", [])

.controller("mainCtrl", function($scope){

  $scope.numbers = {
    num1: "",
    num2: "",
  }

  $scope.add = function(){
    $scope.results = $scope.num1 + $scope.num2;
  }
  $scope.subtract = function(){

  }
    $scope.multiply = function(){

  }
    $scope.divide = function(){

  }
})