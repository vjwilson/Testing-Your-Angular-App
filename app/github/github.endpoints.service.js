(function () {

'use strict';

  angular.module('github.endpoints', [])
    .service('githubEndpointsService', githubEndpointsService);

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
