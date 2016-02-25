(function () {

'use strict';

  angular.module('global.filters', [])
    .filter('yes', yesNo);

    function yesNo() {
      return function(isTruthy) {
        var yepNope = 'Nope';

        if (isTruthy) {
          yepNope = "Yep";
        }

        return yepNope;
      };
    }
  
})();
