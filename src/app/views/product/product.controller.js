(function() {
  'use strict';

  angular
    .module('playquizzy')
    .controller('ProductController', ProductController);

  /** @ngInject */
  function ProductController(productsData,$state, actionServices, facebookServices,$window, $rootScope, $stateParams, resultsData) {
    var vm = this;


    var pagesShown = 1;

    var pageSize = 12;

    vm.paginationLimit = function(data) {
      return pageSize * pagesShown;
    };

    vm.hasMoreItemsToShow = function() {
      return pagesShown < (vm.products.length / pageSize);
    };

    vm.showMoreItems = function() {
      pagesShown = pagesShown + 1;       
    }; 

    function inviteFriends(url){
      facebookServices.sendToFriend(url);
    }

    function goToAmazon(url){
      $window.ga('send', 'event', 'fashionQuiz', 'Amazon Product', url);
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
 
     function restart(){
      $state.go('home');
    }

    function init(){
      $window.ga('send', 'pageview', 'product');
      var id = parseInt($stateParams.id);
      vm.products=_.shuffle(productsData[_.result($rootScope,'user.gender','male')][id]);
      vm.name = resultsData[_.result($rootScope,'user.gender','male')][id].name;
      vm.inviteFriends = inviteFriends;
      vm.goToAmazon = goToAmazon;
      vm.subscribe=subscribe;
      vm.email = _.result($rootScope,'user.email',undefined);
      vm.restart =restart;
    }
    init();

  }
})();
