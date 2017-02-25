//require the model here
var Movie = require('./movieModel.js');

module.exports ={
	getAllMovies : function (req, res) {
	 Movie.find({},function(err,ok){
    if(err){
      res.status(404);
      res.json(err)
    }
    else{
      res.status(200);
      res.json(ok)
    }
  })
	},
//you have to use the movie model to make a new database entry 
	insertMovies :function(req,res){
		var data=req.body
	 for (var i=0;i<data.length;i++){
   Movie.create({
   mov_name:data[i]['mov_name'],
   mov_detail:data[i]['mov_detail'],

    },function(err,ok){
      if(err){
        //res.json();
        res.status(404)
        res.end(err)
      }
      else{
        //res.json()
        res.status(201)
        res.json(ok)
      }

    })
	 
	 }
	
},
getbyid:function(req,res){

var id=req.params.id;
    Movie.find({_id:id},function(err,ok){
      if(err){
        res.status(404);
        res.json(err);

      }
      else{
        res.status(200);
        res.json(ok);
      }
    })
}
	
}
//you need to use params.id to find a movie from your database
		
