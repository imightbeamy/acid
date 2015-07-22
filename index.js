var express = require('express');
var app = express();

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

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


