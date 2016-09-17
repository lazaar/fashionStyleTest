(function() {
  'use strict';

  angular
    .module('playquizzy')
    .controller('ProductController', ProductController);

  /** @ngInject */
  function ProductController(productsData) {
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

 

    function init(){
        vm.products=productsData.products;
    
      
    }
    init();

  }
})();
