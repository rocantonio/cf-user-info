var express = require('express');
var app = express();
const jwtDecode = require('jwt-decode');

app.get('/jwtdecode', function(req, res){
	res.send(`${JSON.stringify(jwtDecode(req.headers.authorization))}`);
});
app.listen(process.env.PORT, function() {
	console.log("Started")
});
