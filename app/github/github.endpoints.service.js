(function () {

'use strict';

  angular.module('github.endpoints', [])
    .factory('githubEndpointsService', githubEndpointsService);

  githubEndpointsService.$inject = ['$http', '$q'];

  function githubEndpointsService($http, $q) {
    var service = {
      findAllEndpoints: findAllEndpoints
    };

    return service;

    function findAllEndpoints() {
      var deferred = $q.defer();

      $http.get('https://api.github.com')
        .then(function(response) {
          var itemObj = response.data;

          var itemKeys = Object.keys(itemObj);

          var items = [];

          itemKeys.forEach(function(itemKey) {
            items.push({
              name: itemKey,
              url:  itemObj[itemKey]
            });
          });

          deferred.resolve(items);
        })
        .catch(function(error) {
          deferred.reject(error);
        });

      return deferred.promise;
    }
  }
  
})();
