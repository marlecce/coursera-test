(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['$localStorage', 'MenuService', 'ApiPath'];
function MyInfoController($localStorage, MenuService, ApiPath) {
  var $ctrl = this;
  $ctrl.basePath = ApiPath;
  $ctrl.user = $localStorage.devid_user;
  $ctrl.item = {};

  if ($ctrl.user) {
	  MenuService.getMenuItemsByShortname($ctrl.user.shortname).then(function (response) {
	  	$ctrl.item = response;
	  });
  } else {
  	$ctrl.errorMsg = "Not Signed Up Yet."
  }
}

})();
