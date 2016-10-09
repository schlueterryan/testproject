angular.module('FantasyFootballApp').factory('Team', function($resource){
  return $resource('/teams/:id', {id: "@id"}, {
    update: {
      method: "PUT"
    }
  });
});
