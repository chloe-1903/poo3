/**
 * Created by webdev on 4/10/15.
 */

angular.module('showcaseApp')
  .controller('DiplomesCtrl', function($scope, $http) {
    $http.get('data/diplomes.json').
      success(function(data) {
        $scope.posts = data;
      }).
      error(function(data) {
        // log error
      });
  });
