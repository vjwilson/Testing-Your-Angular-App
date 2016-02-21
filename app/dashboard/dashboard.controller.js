(function () {
  'use strict';

  angular.module('testingApp').controller('DashboardCtrl', DashboardCtrl);

  DashboardCtrl.$inject = ['githubEndpointsService'];

  function DashboardCtrl(githubEndpointsService) {
    var vm = this;

    vm.items = githubEndpointsService.findAllEndpoints();

    vm.itemKeys = Object.keys(vm.items);
  }

})();
