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

////Articles service used for articles REST endpoint
//angular.module('mean.articles').factory('Articles', ['$resource',
//  function($resource) {
//    return $resource('articles/:articleId', {
//      articleId: '@_id'
//    }, {
//      update: {
//        method: 'PUT'
//      }
//    });
//  }
//]);
