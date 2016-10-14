angular.module('FantasyFootballApp').config(function($routeProvider){
  $routeProvider
    .when('/', {
      redirectTo: '/teams'
    })

    .when('/teams', {
      templateUrl: "assets/templates/teams/index.html",
      controller: "TeamsIndexController",
      controllerAs: 'vm'
    })
    .when('/teams/new', {
      templateUrl: "assets/templates/teams/new.html",
      controller: "TeamsCreateController",
      controllerAs: 'vm'
    })
    .when('/players/:team?', {
      templateUrl: "assets/templates/players/index.html",
      controller: "PlayerIndexController",
      controllerAs: 'vm'
    })
});
