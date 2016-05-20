var express = require('express');
var http = require('http');
var app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.listen(3002, function() {
    console.log('Running Hipchat Translator...');
});

app.post('/translate', function(req, res, err) {
    var requestMessage = req.body.item.message.message;
    var command = calculation.split('/translate ');
    var textToTranslate = command[1];

    var API_KEY = "AIzaSyAPD50jtH10mVJbLx070S7hYboy2m3MF9U";

    var APIReq = http.request({
        host: 'googleapis.com',
        port: '80',
        path: '/language/translate/v2?q=' + textToTranslate + '&target=es&key=' + API_KEY,
        method: 'GET'
    }, function(APIRes) {
        console.log(APIRes);
        APIReq.end();

        res.send({
            "color": "green",
            "message": "Translation: test",
            "notify": false,
            "message_format": "text"
        });
    });
});
