(function () {

'use strict';

  angular.module('github.users', [])
    .factory('githubUsersService', githubUsersService);

  githubUsersService.$inject = ['$http', '$q'];

  function githubUsersService($http, $q) {
    var service = {
      findAllUsers: findAllUsers,
      findOneUser:  findOneUser
    };

    return service;

    function findAllUsers() {
      var deferred = $q.defer();

      $http.get('https://api.github.com/users')
        .then(function(response) {
          var items = response.data;

          deferred.resolve(items);
        })
        .catch(function(error) {
          deferred.reject(error);
        });

      return deferred.promise;
    }

    function findOneUser(login) {
      var deferred = $q.defer();

      $http.get('https://api.github.com/users/' + login)
        .then(function(response) {
          var item = response.data;

          deferred.resolve(item);
        })
        .catch(function(error) {
          deferred.reject(error);
        });

      return deferred.promise;

    }
  }
  
})();