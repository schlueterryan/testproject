var _ = require('lodash');
var players = [
  {"id": 1, "name": "Johnny", "teamID" : 1},
  {"id": 2, "name": "Tim", "teamID" : 1},
  {"id": 3, "name": "Steve", "teamID" : 2},
]
var lastId = 3;

var buildteams = function() {
  // Make a deep copy so we don't change the main teams array
  var rawteams = JSON.parse(JSON.stringify(teams));
  var builtteams = [];
  var Team;

  for(var i=0, l=rawteams.length; i < l; i++) {
    Team = rawteams[i];
    builtteams.push(Team);
  }
  return builtteams
}

module.exports = {
  get: function(id) {
    return _.find(buildteams(), function(Team){
      return Team.id === id;
    });
  },
  all: function() {
    return buildteams();
  },
  update: function(Team) {
    var updatedTeam;
    for(var i=0, l=teams.length; i < l; i++) {
      if(teams[i].id === Team.id){
        _.assign(teams[i], Team);
        updatedTeam = teams[i];
        break;
      }
    }
    return updatedTeam;
  },
  delete: function(id) {
    var deletedTeam;
    for(var i=0, l=teams.length; i < l; i++) {
      if(teams[i].id === id){
        deletedTeam = teams[i];
        teams.splice(i, 1);
        break;
      }
    }
    return deletedTeam;
  },
  create: function(Team) {
    lastId += 1;
    Team.id = lastId;
    teams.push(Team)
    return Team;
  }
}
