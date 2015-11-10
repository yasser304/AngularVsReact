app.controller('listCtrl', ['$scope','$http', function($scope, $http){
        $http.get("../data/10000_complex.json").success(function(data){
            $scope.people = data;
        });
}]);