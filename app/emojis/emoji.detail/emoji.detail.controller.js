(function () {
  'use strict';

  angular.module('testingApp').controller('EmojiDetailCtrl', EmojiDetailCtrl);

  EmojiDetailCtrl.$inject = [];

  function EmojiDetailCtrl() {
    var vm = this;

    vm.things = ["A", "Set", "Of", "Things"];
  }

})();