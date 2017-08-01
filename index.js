var app = angular.module("TurnThisWhite", []);
app.controller("homeCtrl", function($scope, $http, $interval) {

    $scope.loaded = false;

    var updateColorFromServer = function () {
        $http.get("http://localhost:3000/color").then(function (response) {
            $scope.color = response.data.color;
            $scope.inverseColor = response.data.inverseColor
            $scope.loaded = true;
        });
    };

    $scope.makeWhite = function() {
        $http.put("http://localhost:3000/color").then(function (response) {
            $scope.color = response.data.color;
            $scope.inverseColor = response.data.inverseColor
        });
    };

    $interval(updateColorFromServer, 1000);

});