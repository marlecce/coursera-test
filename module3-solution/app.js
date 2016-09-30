(function(){

'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService);

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var ctr1 = this;

    ctr1.search = function(){
      ctr1.found = MenuSearchService.getMatchMenuItems(ctr1.searchText);
    }

    // ctr1.bought = function(item, itemIndex){
    //   ShoppingListCheckOffService.buyItem(item, itemIndex);
    // }
  };

  MenuSearchService.$inject = ['$http'];
  function MenuSearchService($http){
    var service = this;
    service.getMatchMenuItems = function (searchTerm) {
      return $http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/menu_items.json"
      }).then(function (result) {
        console.log(result);
        // process result and only keep items that match
         var foundItems = [];
         var data = result.data;
         for (var i = 0; i < data.length; i++) {
            console.log(data[i]);
         }

        // return processed items
        return foundItems;
        });
    };

  }
})();
