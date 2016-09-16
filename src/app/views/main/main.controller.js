(function() {
  'use strict';

  angular
    .module('playquizzy')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, toastr, $state) {
    var vm = this;

    function activateAnimation() {
      vm.classAnimation = 'rubberBand';
      $timeout(function() {
        vm.classAnimation = '';
      }, 4000);
    }

    function startQuiz() {
      $state.go("question", {id:0});
    }

    function init(){
      activateAnimation();
      vm.startQuiz = startQuiz;
    }
    init();

  }
})();
