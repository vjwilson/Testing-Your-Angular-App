(function () {
  'use strict';

  angular.module('testingApp').controller('StateList2Ctrl', StateList2Ctrl);

  StateList2Ctrl.$inject = [];

  function StateList2Ctrl() {
    var vm = this;

    vm.things = ["A", "Set", "Of", "Things"];
  }

})();