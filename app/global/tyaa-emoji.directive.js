(function() {
  'use strict';

  angular.module('tyaa-emjoi.directive', [])
    .directive('tyaaEmjoi', tyaaEmjoi);

  function tyaaEmjoi() {
    return {
      restrict: 'E',
      scope: {
          emoji: '='
      },
      template: '<a ng-href="{{emoji.emojiUrl}}" target="_blank"><img class="emoji" ng-src="{{emoji.emojiUrl}}" alt="{{emoji.name}} emoji" /><figcaption>{{emoji.name}}</figcaption></a>',
      link: function() {
        var vm = this;
      }
    };
  }

})();
