var express = require('express');
var app = express();

app.use(express.static('public'));

app.listen(3000, function(err){
	if (err) {
		console.log(err);
	} else {
		console.log('app is up and running');
	}
});