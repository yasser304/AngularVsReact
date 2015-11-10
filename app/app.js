var app = angular.module('myApp', [])

.controller('listCtrl', ['$scope','$http', function($scope, $http){
  $http.get("10000_complex.json").success(function(data){
    $scope.people = data;
  });
}])
.directive("list", function(){
  return{
    restrict: 'E',
    controller: 'listCtrl',
    templateUrl: 'listElement.html'
  }
});
