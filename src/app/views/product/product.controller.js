(function() {
  'use strict';

  angular
    .module('playquizzy')
    .controller('ProductController', ProductController);

  /** @ngInject */
  function ProductController(productsData, facebookServices, $rootScope, $stateParams) {
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
 

    function init(){
      var id = parseInt($stateParams.id);
        vm.products=productsData[_.result($rootScope,'user.gender','male')][id];

        vm.inviteFriends = inviteFriends;
    }
    init();

  }
})();
