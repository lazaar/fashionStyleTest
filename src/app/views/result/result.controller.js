(function() {
  'use strict';

  angular
    .module('playquizzy')
    .controller('ResultController', ResultController);

  /** @ngInject */
  function ResultController(responses, facebookServices,$sce, $rootScope,  $timeout, questionsData, resultsData, $state,productsData) {
    var vm = this;
    var responseFlags;
    var results;
    var userResultIndex;

    function calculateResult(){

      responses.getResponses().forEach(function(ResponseIndex, QuestionIndex){

        var response = _.result(questionsData,$rootScope.user.gender + '['+QuestionIndex+'].responses['+ResponseIndex+']',{});
        _.result(response,'flags',[]).forEach(function(flag, index){
          responseFlags[index] += flag;
        });
      });
      userResultIndex = responseFlags.indexOf(_.max(responseFlags));
      vm.description = results[userResultIndex].description;
      vm.description = $sce.trustAsHtml(vm.description);
      vm.name = results[userResultIndex].name;
      vm.image = results[userResultIndex].image;
      vm.products=_.take(_.shuffle( productsData[$rootScope.user.gender][userResultIndex] ),4);
    }

    vm.more=function(){
        $state.go('product', {id: userResultIndex});

    }

    function share(){
      facebookServices.shareFacebook("http://facebook.com", "name", "caption", "description");
    }
    function inviteFriends(){
      facebookServices.sendToFriend("http://facebook.com");
    }

    function init(){
      if(responses.getResponses().length === 0){
        $state.go('home');
      }
      else{
        results = resultsData[$rootScope.user.gender];
        responseFlags = new Array(results.length);
        _.fill(responseFlags, 0);
        vm.isLoading = true;
        calculateResult();
        $timeout(function() {
          vm.isLoading = false;
        }, 1500);
        vm.share = share;
        vm.inviteFriends = inviteFriends;
      }
    }
    init();

  }
})();
