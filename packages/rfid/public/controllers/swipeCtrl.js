angular.module('mean.rfid').controller('swipeCtrl', function($scope, $http){
    'use strict';
    $scope.message = {};
    $scope.callswipe = function() {
        var data = { "number": $scope.number};
        $http.post('/rfid/swipe', data).success(function(data, status) {
            $scope.message = data;
        });
    };
});