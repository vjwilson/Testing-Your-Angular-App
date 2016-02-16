(function () {
  'use strict';

  angular.module('testingApp').controller('StateList1Ctrl', StateList1Ctrl);

  StateList1Ctrl.$inject = ['$scope'];

  function StateList1Ctrl($scope) {
    $scope.items = ["A", "List", "Of", "Items"];
  }

})();