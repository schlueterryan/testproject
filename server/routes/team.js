var _ = require('lodash');
var Team = require('../models/team')

module.exports = function(app) {
  app.get('/teams', function(req, res) {
    res.json(Team.all());
  });

  app.post('/teams', function(req, res) {
    // Add a delay here to simulate the delay of a live server
    // So things like button isSubmitting states can be demonstrated
    setTimeout(function(){
      res.json(Team.create(req.body));
    }, 1000);
  });

  app.put('/teams/:id', function(req, res) {
    // Add a delay here to simulate the delay of a live server
    // So things like button isSubmitting states can be demonstrated
    setTimeout(function(){
      res.json(Team.update(req.body));
    },1000)
  });

  app.get('/teams/:id', function(req, res) {
    var TeamId = parseInt(req.param('id'), 10);
    res.json(Team.get(TeamId) || {});
  });

  app.delete('/teams/:id', function(req, res) {
    res.json(Team.delete(parseInt(req.param('id'), 10)) || {});
  });
};
