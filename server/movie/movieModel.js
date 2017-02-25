//implement model here
var mongoose = require('mongoose');


var movie = new mongoose.Schema({
	mov_name:String,
    mov_detail:String,
    mov_date: {type:Date,default:Date.now}
});

var Movie = mongoose.model('movie', movie);

module.exports = Movie; 