'use strict';

angular.module('mean.rfid').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('rfid example page', {
      url: '/rfid/example',
      templateUrl: 'rfid/views/index.html'
    });
  }
]);
