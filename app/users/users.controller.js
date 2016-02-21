(function () {
  'use strict';

  angular.module('testingApp').controller('UsersCtrl', UsersCtrl);

  UsersCtrl.$inject = ['githubUsersService'];

  function UsersCtrl(githubUsersService) {
    var vm = this;

    vm.users = githubUsersService.findAllUsers();

  }

})();
