const app = angular.module('todoApp', ['react']);

app.controller('intervalCtrl', ['$scope', '$interval', function($scope, $interval) {
    $interval(function() {
        $scope.message = 'current time' + new Date().toLocaleTimeString();
    }, 1000);
}]);