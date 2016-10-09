angular.module('FantasyFootballApp').config(function($routeProvider){
  $routeProvider
    .when('/', {
      redirectTo: '/teams'
    })

    .when('/teams', {
      templateUrl: "assets/templates/teams/index.html",
      controller: "TeamsController"
    })
    .when('/teams/new', {
      templateUrl: "assets/templates/teams/new.html",
      controller: "TeamsCreateController"
    })
    .when('/players', {
      templateUrl: "assets/templates/players/index.html",
      controller: "PlayersIndexController"
    })
});
