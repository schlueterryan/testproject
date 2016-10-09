angular.module('FantasyFootballApp', ['ngRoute', 'ngResource', "ngGravatar"]).config(function(GravatarProvider){
  GravatarProvider.setSize(100);
});
