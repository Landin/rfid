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
        url: '/rfid/loggswipe',
        controller: 'loggswipeCtrl',
        templateUrl: 'rfid/views/loggswipe.html'
      });
      
  }
]);
