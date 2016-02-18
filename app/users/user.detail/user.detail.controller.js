(function () {
  'use strict';

  angular.module('testingApp').controller('UserDetailCtrl', UserDetailCtrl);

  UserDetailCtrl.$inject = ['$scope'];

  function UserDetailCtrl($scope) {
    $scope.items = ["A", "List", "Of", "Items"];
  }

})();