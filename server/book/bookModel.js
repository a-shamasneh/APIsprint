var mongoose = require('mongoose');

var music = new mongoose.Schema({
	m_name:String,
    m_detail:String,
    m_date: {type:Date,default:Date.now}
});

var Music = mongoose.model('music', music);

module.exports = Music; 