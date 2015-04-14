
angular.module('showcaseApp')
  .controller('ExpCtrl', function($scope, $http) {
    $http.get('data/expPro.json').
      success(function(data) {
        $scope.posts = data;
      }).
      error(function(data) {
        // log error
      });
  });
