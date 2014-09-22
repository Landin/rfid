'use strict';

angular.module('mean.rfid').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider
      .state('Kort', {
        url: '/rfid/cards',
        controller: 'cardCtrl',
        templateUrl: 'rfid/views/cards.html'
      })
      .state('swipe page', {
        url: '/rfid/swipe',
        controller: 'swipeCtrl',
        templateUrl: 'rfid/views/callswipe.html'
      })
      .state('Kort Logg', {
        url: '/rfid/listswipe',
        controller: 'listCtrl',
        templateUrl: 'rfid/views/listswipe.html'
      });
      
  }
]);
