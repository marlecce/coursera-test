(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService', '$localStorage'];
function SignUpController(MenuService, $localStorage) {
  var $ctrl = this;
  $ctrl.message = "";

  $ctrl.submit = function () {
    MenuService.getMenuItemsByShortname($ctrl.user.shortname).then(function (response) {
      $ctrl.item = response;
      if ($ctrl.item) {
      	$ctrl.message = "Your information has been saved.";
      	$localStorage.devid_user = $ctrl.user;
      }
    }, function (error) {
    	$ctrl.errorMessage = "No such menu number exists";
    });
  };
}


})();
