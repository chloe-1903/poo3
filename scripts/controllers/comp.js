'use strict';

angular.module('showcaseApp')
  .controller('CompCtrl', function($scope, $http) {
    $http.get('data/aptitudesEtComp.json').
      success(function(data) {
        $scope.posts = data;
      }).
      error(function(data) {
        // log error
      });
  });

