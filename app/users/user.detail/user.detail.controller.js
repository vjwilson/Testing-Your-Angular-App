(function () {
  'use strict';

  angular.module('testingApp').controller('UserDetailCtrl', UserDetailCtrl);

  UserDetailCtrl.$inject = ['$scope', '$stateParams', 'githubUsersService'];

  function UserDetailCtrl($scope, $stateParams, githubUsersService) {
    $scope.userLogin = $stateParams.userLogin;

    activate();

    function activate() {
      githubUsersService.findOneUser($scope.userLogin)
        .then(function(response) {
          $scope.user = response;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }

})();