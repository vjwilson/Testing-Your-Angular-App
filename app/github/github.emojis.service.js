(function () {

'use strict';

  angular.module('github.emojis', [])
    .service('githubEmojisService', githubEmojisService);

  function githubEmojisService() {
    var service = {
      findAllEmojis: findAllEmojis
    };

    return service;

    function findAllEmojis() {
      var emojis = undefined;

      return emojis;
    }
  }
  
})();