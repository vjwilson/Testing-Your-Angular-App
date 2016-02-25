(function () {
  'use strict';

  angular.module('testingApp').controller('UsersCtrl', UsersCtrl);

  UsersCtrl.$inject = ['githubUsersService'];

  function UsersCtrl(githubUsersService) {
    var vm = this;

    activate();

    function activate() {
      githubUsersService.findAllUsers()
        .then(function(response) {
          vm.users = response;
        })
        .catch(function(error) {
          console.log(error);
        });
    }

  }

})();
