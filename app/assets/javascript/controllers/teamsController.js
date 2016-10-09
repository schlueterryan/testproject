angular.module('FantasyFootballApp').controller('TeamsController', function(Team, $scope){
$scope.teams = Team.query();
});
