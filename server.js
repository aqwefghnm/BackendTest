const express = require('express');
const fs = require('fs');
const https = require('https');
const app = express();
const port = 11122;

app.use(express.static('./public'));

app.get('/get_data', function(req, res) {
	res.send(`<h1>Hello, ${req.query.fname} ${req.query.lname}</h1>`);
});


const key = fs.readFileSync('/home/wp2018/ssl/private.key');
const cert = fs.readFileSync('/home/wp2018/ssl/certificate.crt');

var opt = {
  key: key,
  cert: cert,
};

https.createServer(opt, app).listen(port, function(){
  console.log('---Connected---');
});
//app.listen(port, function(){
//	console.log('Listening Port');
//});
