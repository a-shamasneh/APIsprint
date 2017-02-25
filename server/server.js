//require express and mongoose here
//require your middleware and routes here
var express = require('express');
var app = express();
var mongoose = require('mongoose');
require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);



//=============================================================================
/*									Database								 */
//=============================================================================

	
	//here you will have to connect to your mongo database,
	var mongoURI = process.env.MONGODB_URI ||'mongodb://localhost/apisprint'; 
	mongoose.connect(mongoURI);
	var db = mongoose.connection;
	//set the port number and console log something so that 
	//you know that the mongodb is connected
db.once('open', function() { console.log("connection mongo open") });

//=============================================================================
/*									Server   								 */
//=============================================================================

//set express to listen to for requests or certain port
var port=process.env.PORT || 6400;
app.listen(port);
console.log("running on port"+port)


module.exports=app;