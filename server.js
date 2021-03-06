const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const database = require('./database');
const routes = require('./app/routes/index.js');
const api = require('./app/api/image-search.js');

var app = express();

app.set('port', (process.env.PORT || 1337));
app.use(favicon(path.join(__dirname, 'views', 'favicon.ico')));

//connect to mongoDB and get database - 1 connection for entire app
database.connect();
database.db(function() {
  
  //begin listening on port after database connection
  app.listen(app.get('port'));
  console.log(`Server listening on port ${app.get('port')}`);
  
  //set views directory and engine
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'jade');
  
  //pass app instance to routes and api modules
  routes(app);
  api(app);
  
});


