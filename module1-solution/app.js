(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.data = "Pizza, tua sorella";
  $scope.message = "";

  $scope.checkData = function () {

    var rawdata = $scope.data.split(',');

    if ( rawdata.length == 1 && rawdata == '') {

      $scope.message = 'Please enter data first';

    } else {

      var data = [];
      var j = 0;
      for (var i = 0; i < rawdata.length; i++) {
          console.log(rawdata[i].trim());
          if ( rawdata[i].trim() !== '' ) {
            data[j] = rawdata[i];
            j++;
          }
      }

      if ( data.length > 3 ) {
        $scope.message = 'Too much!';
      } else {
        $scope.message = 'Enjoy!';
      }
    }

  };
}

})();
