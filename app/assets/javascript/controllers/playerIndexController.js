angular.module('FantasyFootballApp').controller('PlayerIndexController',
[ '$routeParams', 'Player', function ($routeParams, Player) {
    var vm = this;
    vm.team = $routeParams.team;
   vm.players = Player.get({id:1})();
  }]);
