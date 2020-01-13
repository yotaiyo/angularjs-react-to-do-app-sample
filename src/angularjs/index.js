const app = angular.module('todoApp', ['react']);

app.controller('todoAppCtrl', function($scope) {
    $scope.todoList = []
    $scope.addTodo = function(name) {
        $scope.todoList.push({ name, done: false })
        $scope.textInput = []
    }
    $scope.deleteTodo = function(index) {
        $scope.todoList.splice(index, 1)
    }
    $scope.completeTodo = function(index) {
        const todo = $scope.todoList[index]
        $scope.todoList[index] = { ...todo, done: !todo.done }
    }
});