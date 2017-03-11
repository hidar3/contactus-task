var express = require('express');
var path=require('path');
var app = express();
var router=express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


mongoose.connect('mongodb://prithviraju1369:prithviraju1369@ds129010.mlab.com:29010/contactus');


app.use(express.static(path.join(__dirname, './dist')));

app.use(bodyParser.urlencoded({ extended: false }));
 
app.use(bodyParser.json());

//schema
var PostSchema= mongoose.Schema({
   email:{
       type:String,
       required:true
   },
   name:{
       type:String,
       required:true
   },
   message:{
       type:String,
       required:true
   }
   
});

var Post=mongoose.model('Post', PostSchema);  
app.use('/push/', function(req,res){
   var post=new Post({
            email:req.body.data.email,
            name:req.body.data.name,
            message:req.body.data.message
        });
    post.save(function(err,docs){
       if(err){
           console.log(err);
       }
       res.send(docs);
    });

});


/// app runs in port
app.listen(process.env.PORT || 3000,function(){
    console.log('listening at 3000');
})
