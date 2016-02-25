(function () {

'use strict';

  angular.module('github.emojis', [])
    .factory('githubEmojisService', githubEmojisService);

  githubEmojisService.$inject = ['$http', '$q'];

  function githubEmojisService($http, $q) {
    var service = {
      findAllEmojis: findAllEmojis
    };

    return service;

    function findAllEmojis() {
      var deferred = $q.defer();

      $http.get('https://api.github.com/emojis')
        .then(function(response) {
          var itemObj = response.data;

          var itemKeys = Object.keys(itemObj);

          var items = [];

          itemKeys.forEach(function(itemKey) {
            items.push({
              name:     itemKey,
              emojiUrl: itemObj[itemKey]
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
