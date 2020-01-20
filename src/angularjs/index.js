const app = angular.module('todoApp', ['react', 'ui.bootstrap']);

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

app.controller('modalDemoCtrl', ['$uibModal', function($uibModal) {
    var pc = this;

    pc.open = function () {
        $uibModal.open({
          ariaLabelledBy: 'modal-title',
          ariaDescribedBy: 'modal-body',
          templateUrl: 'myModalContent.html',
          controller: 'modalCtrl',
          controllerAs: 'pc',
        });
    };
}]);

app.controller('modalCtrl', ['$uibModalInstance', function($uibModalInstance) {
    var pc = this;

    pc.ok = function () {
      alert("You clicked the ok button.");
      $uibModalInstance.close();
    };

    pc.cancel = function () {
      alert("You clicked the cancel button.");
      $uibModalInstance.dismiss('cancel');
    };
}]);