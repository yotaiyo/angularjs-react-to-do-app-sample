const app = angular.module('todoApp', ['react']);

app.controller('intervalCtrl', ['$scope', '$interval', function($scope, $interval) {
    $scope.props = { $interval }
}]);