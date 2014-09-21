angular.module('mean.rfid').controller('listCtrl', function($scope, $http){
    'use strict';
    $scope.message = {};
    $scope.listswipe = function() {
        var data = { "number": $scope.number};
        $http.post('/rfid/listswipe', data).success(function(data, status) {
            $scope.message = data;
        });
    };
});