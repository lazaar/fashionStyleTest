(function() {
  'use strict';

  angular
    .module('playquizzy')
    .controller('ProductController', ProductController);

  /** @ngInject */
  function ProductController(productsData, facebookServices,$window, $rootScope, $stateParams, resultsData) {
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

    function inviteFriends(){
      facebookServices.sendToFriend("http://facebook.com");
    }

    function goToAmazon(url){
      $window.open(url, '_blank');

    }
 

    function init(){
      var id = parseInt($stateParams.id);
        vm.products=_.shuffle(productsData[_.result($rootScope,'user.gender','male')][id]);
        vm.name = resultsData[_.result($rootScope,'user.gender','male')][id].name;
        vm.inviteFriends = inviteFriends;
        vm.goToAmazon = goToAmazon;
    }
    init();

  }
})();
