angular.module('FantasyFootballApp').controller('TeamsCreateController', function($scope, Team, $location){
  $scope.team = new Team();
  $scope.isSubmitting = false;

  $scope.saveTeam = function(team){
    $scope.isSubmitting = true;
    team.$save().then(function(){
      $location.path("/teams");
    }).finally(function(){
      $scope.isSubmitting = false;
    });
  }
});
