const express = require('express');
const app = express();
const port = 11122;

app.use(express.static('./public'));

app.get('/get_data', function(req, res) {
	res.send(`<h1>Hello, ${req.query.fname} ${req.query.lname}</h1>`);
});


app.listen(port, function(){
	console.log('Listening Port');
});
