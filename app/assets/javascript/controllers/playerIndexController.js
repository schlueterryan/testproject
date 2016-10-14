angular.module('FantasyFootballApp').controller('PlayerIndexController',
[ '$routeParams', function ($routeParams) {
    var vm = this;
    vm.Players = $routeParams.team;

  }]);
