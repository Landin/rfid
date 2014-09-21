'use strict';

angular.module('mean.rfid').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider
      .state('rfid example page', {
        url: '/rfid/cards',
        controller: 'cardCtrl',
        templateUrl: 'rfid/views/cards.html'
      })
      .state('swipe page', {
        url: '/rfid/swipe',
        controller: 'swipeCtrl',
        templateUrl: 'rfid/views/callswipe.html'
      })
      .state('listswipe page', {
        url: '/rfid/listswipe',
        controller: 'listCtrl',
        templateUrl: 'rfid/views/listswipe.html'
      });
      
  }
]);
