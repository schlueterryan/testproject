angular.module('FantasyFootballApp').factory('Player', function($resource){
  return $resource('/players/:id', {id: "@id"}, {
    update: {
      method: "PUT"
    }
  });
});
