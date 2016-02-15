(function () {
  'use strict';

  angular.module('cordeliaApp').controller('StateList2Ctrl', StateList2Ctrl);

  StateList2Ctrl.$inject = ['$scope'];

  function StateList2Ctrl($scope) {
    $scope.things = ["A", "Set", "Of", "Things"];
  }

})();