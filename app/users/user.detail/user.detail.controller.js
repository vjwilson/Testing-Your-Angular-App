(function () {
  'use strict';

  angular.module('testingApp').controller('UserDetailCtrl', UserDetailCtrl);

  UserDetailCtrl.$inject = ['$scope', '$stateParams', 'githubUsersService'];

  function UserDetailCtrl($scope, $stateParams, githubUsersService) {
    $scope.userLogin = $stateParams.userLogin;

    $scope.user = githubUsersService.findOneUser('bmizerany');
  }

})();