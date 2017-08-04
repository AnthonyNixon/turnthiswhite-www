var app = angular.module("TurnThisWhite", []);
app.controller("homeCtrl", function($scope, $http, $interval) {
    $scope.loaded = false;
    $scope.backendHost = "http://turnthiswhite.com:3000";

    var updateColorFromServer = function () {
        $http.get($scope.backendHost + "/color").then(function (response) {
            $scope.color = response.data.color;
            $scope.inverseColor = response.data.inverseColor
            $scope.loaded = true;
        });
    };

    $scope.makeWhite = function() {
        $http.put($scope.backendHost + "/color").then(function (response) {
            $scope.color = response.data.color;
            $scope.inverseColor = response.data.inverseColor
        });
        ga('send', 'event', 'button-click', 'whiter');
    };

    $interval(updateColorFromServer, 1000);
});