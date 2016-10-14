var _ = require('lodash');
var players = [
  {"id": 1, "name": "Johnny", "teamID" : 1},
  {"id": 2, "name": "Tim", "teamID" : 1},
  {"id": 3, "name": "Steve", "teamID" : 2},
]
var lastId = 3;

var buildplayers = function() {
  // Make a deep copy so we don't change the main players array
  var rawplayers = JSON.parse(JSON.stringify(players));
  var builtplayers = [];
  var Team;

  for(var i=0, l=rawplayers.length; i < l; i++) {
    Team = rawplayers[i];
    builtplayers.push(Team);
  }
  return builtplayers
}

module.exports = {
  get: function(id) {
    return _.find(buildplayers(), function(Team){
      return Team.id === id;
    });
  },
  all: function() {
    return buildplayers();
  },
  update: function(Team) {
    var updatedTeam;
    for(var i=0, l=players.length; i < l; i++) {
      if(players[i].id === Team.id){
        _.assign(players[i], Team);
        updatedTeam = players[i];
        break;
      }
    }
    return updatedTeam;
  },
  delete: function(id) {
    var deletedTeam;
    for(var i=0, l=players.length; i < l; i++) {
      if(players[i].id === id){
        deletedTeam = players[i];
        players.splice(i, 1);
        break;
      }
    }
    return deletedTeam;
  },
  create: function(Team) {
    lastId += 1;
    Team.id = lastId;
    players.push(Team)
    return Team;
  }
}
