(function () {
  'use strict';

  angular.module('cordeliaApp').controller('StateList1Ctrl', StateList1Ctrl);

  StateList1Ctrl.$inject = ['$scope'];

  function StateList1Ctrl($scope) {
    $scope.items = ["A", "List", "Of", "Items"];
  }

})();