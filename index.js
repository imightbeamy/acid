var express = require('express');
var app = express();

var api = require('./src/api');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');

app.engine('mustache', require('hogan-express'));
app.set('view engine', 'mustache');

app.get('/', function(request, response) {
    response.render('pages/index', {
        text: "hi"
    })
});

app.get('/api/:method/:user_id?', function(request, response) {
    api.handle(request.params.method, request.params.user_id).then(function(data) {
        response.send(data);
    });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
