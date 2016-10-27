(function () {
"use strict";

angular.module('public')
.component('item', {
  templateUrl: 'src/public/item/item.html',
  bindings: {
    item: '<'
  }
});
})();
