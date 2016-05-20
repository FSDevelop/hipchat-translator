var express = require('express');
var http = require('http');
var app = express();
var bodyParser = require('body-parser');
var apiKey = "AIzaSyAPD50jtH10mVJbLx070S7hYboy2m3MF9U";
var googleTranslate = require('google-translate')(apiKey);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.listen(3000, function() {
    console.log('Running Hipchat Translator on port 3000...');
});

app.post('/translate', function(req, res, err) {
    console.log('There is a request from HipChat');

    var message = req.body.item.message.message;
    var command = message.split('/translate ');
    var textToTranslate = command[1];
    
    googleTranslate.translate(textToTranslate, 'en', function(err, translation) {
        res.send({
            "color": "green",
            "message": "Translation: " + translation.translatedText,
            "notify": false,
            "message_format": "text"
        });
    });
});
