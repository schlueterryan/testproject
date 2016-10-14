angular.module('FantasyFootballApp').controller('TeamsCreateController', function(Team, $location){
  var vm = this;
  vm.team = new Team();
  vm.isSubmitting = false;

  vm.saveTeam = function(team){
  vm.isSubmitting = true;
    team.$save().then(function(){
      $location.path("/teams");
    }).finally(function(){
      vm.isSubmitting = false;
    });
  }
});
