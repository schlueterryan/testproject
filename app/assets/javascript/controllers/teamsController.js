angular.module('FantasyFootballApp').controller('TeamsIndexController', function(Team){
var vm = this;
vm.teams = Team.query();
});
