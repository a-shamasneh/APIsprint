//require files here
var Music = require('./bookModel.js');

module.exports ={
	insertBooks : function (req, res) {
	var data=req.body
	
	 for (var i=0;i<data.length;i++){
   Music.create({
   m_name:data[i]['m_name'],
   m_detail:data[i]['m_detail'],

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
getall :function(req,res){
  // console.log(req.params())
  Music.find({},function(err,ok){
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

	//you have to use the books model to make a new database entry 
	
	//you need to use params.id to find a books from your database
	getbyid:function(req,res){
    console.log(req.params.id);
    var id=req.params.id;
    Music.find({_id:id},function(err,ok){
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