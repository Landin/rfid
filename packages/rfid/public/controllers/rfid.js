'use strict';

angular.module('mean.rfid').controller('RfidController', ['$scope', 'Global', 'Rfid',
  function($scope, Global, Rfid) {
    $scope.global = Global;
    $scope.package = {
      name: 'rfid'
    };
  }
]);
