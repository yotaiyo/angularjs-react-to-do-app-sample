const app = angular.module('todoApp', ['react']);

app.controller('intervalCtrl', ['$scope', '$interval', function($scope, $interval) {
    $scope.string = '';
    $scope.showString = function () {
        $scope.string = 'show';
    }
    $scope.showString = function () {
        $scope.string = 'show';
    }
    $scope.hideString = function () {
        $scope.string = '';
    }
    $scope.props = { $interval, showString: $scope.showString, hideString: $scope.hideString }
}]);