(function () {

'use strict';


  var app = angular.module('testingApp', ['ui.router', 'ngAnimate', 'github']);

  /* Configuration */

  app.config(appConfig);

  appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function appConfig($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/");
    //
    // Now set up the states
    $stateProvider
      .state('dashboard', {
        url: "/",
        templateUrl: "dashboard/dashboard.html",
        controller: 'DashboardCtrl',
        controllerAs: 'vm'
      })
      .state('users', {
        url: "/users",
        templateUrl: "users/users.html",
        controller: 'UsersCtrl',
        controllerAs: 'vm'
      })
      .state('users-detail', {
        url: "/users/:userLogin",
        templateUrl: "users/user.detail/user.detail.html",
        controller: 'UserDetailCtrl'
      })
      .state('emojis', {
        url: "/emojis",
        templateUrl: "emojis/emojis.html",
        controller: 'EmojisCtrl',
        controllerAs: 'vm'
      });
  }

  //Load controller
  angular.module('testingApp')

  .controller('MainController', [
    '$scope',
    function($scope) {
      $scope.test = "Testing...";
    }
  ]);

})();