(function() {
  'use strict';

  angular
    .module('playquizzy')
    .controller('ResultController', ResultController);

  /** @ngInject */
  function ResultController(responses, facebookServices,$sce, actionServices, $rootScope,  $timeout, questionsData, resultsData, $state,productsData, configConstantes) {
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

      actionServices.saveResult(vm.email,vm.name, $rootScope.user,responses.getResponses()  );
    }

    vm.more=function(){
        $state.go('product', {id: userResultIndex});

    }

    function share(){
      facebookServices.shareFacebook(configConstantes.facebookUrlApp, results[userResultIndex].facebookName.replace('{{userName}}', $rootScope.user.name), configConstantes.share.result.caption, results[userResultIndex].facebookDescription.replace('{{userName}}', $rootScope.user.name), '/'+ vm.image );
    }
    function inviteFriends(url){
      facebookServices.sendToFriend(url || configConstantes.facebookUrlApp);
    }

    function restart(){
      $state.go('home');
    }
    function goToAmazon(url){
      $window.open(url, '_blank');

    }

    function subscribe(){
      vm.emailLoading = true;
      actionServices.subscribe(vm.email, vm.name).then(function(data){
        vm.displayMessage = 'Subscribe Successful!';
        vm.style = {color:'green'};
      }).catch(function(data){
        vm.displayMessage = 'An error occured, try again later';
        vm.style = {color:'red'};
      }).finally(function(){
        vm.emailLoading = false;
      });
    }

    function init(){
      if(responses.getResponses().length === 0){
        $state.go('home');
      }
      else{
        results = resultsData[$rootScope.user.gender];
        vm.email = _.result($rootScope,'user.email',undefined);
        responseFlags = new Array(results.length);
        _.fill(responseFlags, 0);
        vm.isLoading = true;
        calculateResult();
        $timeout(function() {
          vm.isLoading = false;
        }, 1500);
        vm.share = share;
        vm.inviteFriends = inviteFriends;
        vm.restart = restart;
        vm.goToAmazon = goToAmazon;
        vm.subscribe = subscribe;
      }
    }
    init();

  }
})();
