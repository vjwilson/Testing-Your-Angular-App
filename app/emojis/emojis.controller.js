(function () {
  'use strict';

  angular.module('testingApp').controller('EmojisCtrl', EmojisCtrl);

  EmojisCtrl.$inject = ['githubEmojisService'];

  function EmojisCtrl(githubEmojisService) {
    var vm = this;

    vm.emojis = githubEmojisService.findAllEmojis();

    vm.emojis = Object.keys(vm.emojis).map(function(key) {
      return {
        name: key,
        emojiUrl: vm.emojis[key]
      };
    });

  }

})();
