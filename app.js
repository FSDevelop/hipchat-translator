var express = require('express');
var http = require('http');
var app = express();
var bodyParser = require('body-parser');
var curl = require('node-curl');
  /*curl('www.google.com', function(err) {
    console.info(this.status);
    console.info('-----');
    console.info(this.body);
    console.info('-----');
    console.info(this.info('SIZE_DOWNLOAD'));
  });*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.listen(3000, function() {
    console.log('Running Hipchat Translator...');
});

app.post('*', function(req, res, err) { 
//    console.log('request coming from hipchat');
    var message = req.body.item.message.message;
    var command = message.split('/translate ');
    var textToTranslate = command[1];

    var API_KEY = "AIzaSyAPD50jtH10mVJbLx070S7hYboy2m3MF9U";
	console.log(textToTranslate);
    /*
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
    });*/
});
