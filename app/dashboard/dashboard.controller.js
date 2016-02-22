(function () {
  'use strict';

  angular.module('testingApp').controller('DashboardCtrl', DashboardCtrl);

  DashboardCtrl.$inject = ['githubEndpointsService'];

  function DashboardCtrl(githubEndpointsService) {
    var vm = this;

    vm.items = {};

    activate();

    function activate() {
      githubEndpointsService.findAllEndpoints()
        .then(function(response) {
          vm.items = response;
        })
        .catch(function(error) {
          console.log(error);
        });
    }

  }

})();
