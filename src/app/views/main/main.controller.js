(function() {
  'use strict';

  angular
    .module('playquizzy')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, toastr, $state, $rootScope, facebookServices, configConstantes,$window, responses) {
    var vm = this;

    function activateAnimation() {
      vm.classAnimation = 'rubberBand';
      $timeout(function() {
        vm.classAnimation = '';
      }, 4000);
    }

    function startQuiz() {
      responses.setResponses([]);
      if(!_.isEmpty($rootScope.user)){
        $state.go("question", {id:0});
      }
      else{
        $window.ga('send', 'event', 'fashionQuiz', 'Facebook Register');
        FB.login(function(response) {
            if (response.authResponse) {
              $state.go("question", {id:0});
            } 
        }, {
            scope: 'public_profile, email,user_birthday'
        });
      }
    }

    function share(){
      facebookServices.shareFacebook(configConstantes.facebookUrlApp, configConstantes.share.main.name, configConstantes.share.main.caption, configConstantes.share.main.description, '/assets/images/quizzImage.png');
    }

    function inviteFriends(){
      facebookServices.sendToFriend(configConstantes.facebookUrlApp);
    }

    function init(){
      activateAnimation();
      vm.startQuiz = startQuiz;
      vm.share = share;
      vm.inviteFriends = inviteFriends;
      $window.ga('send', 'pageview', 'fashionQuiz/main');
    }
    init();

  }
})();
