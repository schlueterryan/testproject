var _ = require('lodash');
var Player = require('../models/player')

module.exports = function(app) {
  app.get('/players', function(req, res) {
    res.json(Player.all());
  });

  app.post('/players', function(req, res) {
    // Add a delay here to simulate the delay of a live server
    // So things like button isSubmitting states can be demonstrated
    setTimeout(function(){
      res.json(Player.create(req.body));
    }, 1000);
  });

  app.put('/players/:id', function(req, res) {
    // Add a delay here to simulate the delay of a live server
    // So things like button isSubmitting states can be demonstrated
    setTimeout(function(){
      res.json(Player.update(req.body));
    },1000)
  });

  app.get('/players/:id', function(req, res) {
    var PlayerId = parseInt(req.param('id'), 10);
    res.json(Player.get(PlayerId) || {});
  });

  app.delete('/players/:id', function(req, res) {
    res.json(Player.delete(parseInt(req.param('id'), 10)) || {});
  });
};
