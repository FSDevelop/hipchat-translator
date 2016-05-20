var express = require('express');
var http = require('http');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.listen(3000, function() {
    console.log('Running Hipchat Translator on port 3000...');
});

app.post('*', function(req, res, err) {
    console.log('There is a request from HipChat');
    
    var message = req.body.item.message.message;
    var command = message.split('/translate ');
    var textToTranslate = command[1];

    var API_KEY = "AIzaSyAPD50jtH10mVJbLx070S7hYboy2m3MF9U";
    console.log(textToTranslate);
    
    var options = {
      host: 'googleapis.com',
      port: 443,
      path: '/language/translate/v2?q=' + textToTranslate + '&target=es&key=' + API_KEY,
      method: 'GET'
    };

    var reqAPI = http.request(options, function(resAPI) {
      console.log('STATUS: ' + resAPI.statusCode);
      console.log('HEADERS: ' + JSON.stringify(resAPI.headers));
      resAPI.setEncoding('utf8');
      resAPI.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
      });
    });
});
