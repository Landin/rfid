angular.module('mean.rfid').controller('loggswipeCtrl', function($scope, $location, Loggswipe){
    'use strict';
    
    $scope.find = function() {
     Loggswipe.query(function(loggswipes) {
        $scope.loggswipes = loggswipes;
      });
    };
});