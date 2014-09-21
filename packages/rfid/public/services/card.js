'use strict';

//Articles service used for articles REST endpoint
angular.module('mean.rfid').factory('Cards', ['$resource',
  function($resource) {
    return $resource('rfid/cards/:cardId', {
      cardId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);