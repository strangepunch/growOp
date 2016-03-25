//**growOp main node server API file
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

//** insert Get function here that returns a JSON object - first locally created then from Mlab test db
//app.get('/cool', function(request, response) {
//  response.send(cool());
//});

//** insert Put function here that accepts a JSON object as a parameter and stores it
//app.put('/cool', function(request, response) {
//  response.send(cool());
//});

app.listen(app.get('port'), function() {
  console.log('GrowOp server is running on port', app.get('port'));
});


