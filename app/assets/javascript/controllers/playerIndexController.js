angular.module('FantasyFootballApp').controller('PlayerIndexController', function(Players, $scope){
$scope.players = Team.query();
});
