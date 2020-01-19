const app = angular.module('todoApp', ['react']);

app.controller('intervalCtrl', ['$scope', function($scope) {
    $scope.message = 'test';
}]);