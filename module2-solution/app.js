(function(){

'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyShoppingController', ToBuyShoppingController)
  .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyShoppingController(ShoppingListCheckOffService){
    var ctr1 = this;
    ctr1.items = ShoppingListCheckOffService.itemsToBuy;
    ctr1.bought = function(item, itemIndex){
      ShoppingListCheckOffService.buyItem(item, itemIndex);
    }
  };

  AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtShoppingController(ShoppingListCheckOffService){
    var ctr2 = this;
    ctr2.items = ShoppingListCheckOffService.boughtItems;
  };

  function ShoppingListCheckOffService(){
    var service = this;
    service.itemsToBuy = [
      {name: "cookies", quantity: 10},
      {name: "tea", quantity: 2},
      {name: "water bottles", quantity: 6},
      {name: "milk bootles", quantity: 20},
      {name: "coffee", quantity: 10},
      {name: "chocolate", quantity: 5}
    ];
   service.boughtItems = [];

   service.buyItem = function (item, itemIndex) {
     service.itemsToBuy.splice(itemIndex, 1);
     service.boughtItems.push(item);
   };

  }
})();
