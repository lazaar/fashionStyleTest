(function() {
  'use strict';

  angular
    .module('faceFashion')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
