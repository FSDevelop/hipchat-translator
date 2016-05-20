var express = require('express');
var http = require('http');
var app = express();
var bodyParser = require('body-parser');
var curl = require('node-curl');

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


    curl('https://googleapis.com/language/translate/v2?q=' + textToTranslate + '&target=es&key=' + API_KEY, function(err) {
        console.log('Curl made.');
        console.info(this.status);
        console.info('-----');
        console.info(this.body);
        console.info('-----');
        console.info(this.info('SIZE_DOWNLOAD'));

        res.send({
            "color": "green",
            "message": "Translation: test",
            "notify": false,
            "message_format": "text"
        });
    });
});
