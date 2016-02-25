(function () {
  'use strict';

  angular.module('testingApp').controller('EmojisCtrl', EmojisCtrl);

  EmojisCtrl.$inject = ['githubEmojisService'];

  function EmojisCtrl(githubEmojisService) {
    var vm = this;

    activate();

    function activate() {
      githubEmojisService.findAllEmojis()
        .then(function(response) {
          vm.emojis = response;
        })
        .catch(function(error) {
          console.log(error);
        });
    }

  }

})();
