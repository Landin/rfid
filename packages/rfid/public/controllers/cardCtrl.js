angular.module('mean.rfid').controller('cardCtrl', function($scope, $location, Cards){
    'use strict';
    
    $scope.find = function() {
     Cards.query(function(cards) {
        $scope.cards = cards;
      });
    };

    $scope.clearNew = function() {
        var newcard = $scope.newcard;
        newcard.rfid  = "";
        newcard.fnamn = "";
        newcard.enamn = "";
        newcard.email = "";
    };

    $scope.addPost = function() {
        var newcard = { "rfid":  $scope.newcard.rfid,
                        "fnamn": $scope.newcard.fnamn,
                        "enamn": $scope.newcard.enamn,
                        "email": $scope.newcard.email
                      };
        $scope.cards.push(newcard);
        $scope.clearNew();
    };

    $scope.remove = function(card) {
      if (card) {
        card.$remove();

        for (var i in $scope.cards) {
          if ($scope.cards[i] === card) {
            $scope.cards.splice(i, 1);
          }
        }
      } else {
        $scope.card.$remove(function(response) {
          $location.path('/rfid/cards');
        });
      }
    };

});