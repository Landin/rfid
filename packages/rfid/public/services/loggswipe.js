'use strict';

//Articles service used for articles REST endpoint
angular.module('mean.rfid').factory('Loggswipe', ['$resource',
  function($resource) {
    return $resource('rfid/loggswipes/:loggswipeId', {
      loggswipeId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);