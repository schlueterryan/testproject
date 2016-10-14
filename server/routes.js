var express = require('express');
var app = express();

// Load Express Configuration
require('./expressConfig')(app, express);

// Root route
app.get('/', function(req, res){
  res.sendfile('index.html', {root: app.settings.views});
});

// Load route
require('./routes/team')(app);
require('./routes/player')(app);
module.exports = app;
