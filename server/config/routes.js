//you need to require some files here
var Music = require('../book/bookController.js');
var Movie= require('../movie/movieController.js');


module.exports = function (app, express) {

//=============================================================================
/*								movie route									 */
//=============================================================================
app.post('/api/music/insert',Movie.insertMovies);
	app.get('/api/movie/getAll', Movie.getAllMovies);
	//here you have to add two more routes
	app.get('/api/movie/getbyid/:id', Movie.getbyid);
//=============================================================================
/*								book route									 */
//=============================================================================
	app.post('/api/music/insert',Music.insertBooks);
	//here you have to add two more routes
	app.get('/api/music/getAll', Music.getall);
	app.get('/api/music/get/:id', Music.getbyid);
	
};

