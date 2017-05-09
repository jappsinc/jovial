var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/assets'));

// views is directory for all template files
//app.set('views', __dirname + '/views');
//app.set('view engine', 'ejs');

/*app.get('/', function(request, response) {
  response.render('/index');
});*/

app.get('/', function(req, res){
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(app.get('port'), function() {
  console.log('Jovial app is running on port', app.get('port'));
});