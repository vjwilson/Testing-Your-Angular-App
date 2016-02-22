(function () {

'use strict';

  angular.module('github.endpoints', [])
    .factory('githubEndpointsService', githubEndpointsService);

    githubEndpointsService.$inject = ['$http'];

  function githubEndpointsService($http) {
    var service = {
      findAllEndpoints: findAllEndpoints
    };

    return service;

    function findAllEndpoints() {
      return $http.get('https://api.github.com/');
    }
  }
  
})();
