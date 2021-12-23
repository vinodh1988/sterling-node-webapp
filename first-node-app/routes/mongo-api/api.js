const express=require('express');
const route=express.Router();
const people=require('../../mongodb/schema')
const passport = require('passport')
route.get("/people",passport.authenticate('jwt',{session:false}),function(request,response){
    people.find({},{_id:0},function(err,data){
        if(err)
            response.status(500).send("Server error");
        else
            response.json(data)
    })
})

route.post("/people",function(request,response){
    
    people.insertMany(request.body,function(err,data){
        if(err)
            response.status(500).send("Server error");
        else
            response.json(request.body)
    })
})

route.put("/people/:sno",function(request,response){
     people.updateMany({sno:request.params.sno},{$set:request.body},function(err,data){
    if(err)
        response.status(500).send("Server error");
    else
        response.json({result:"Successfuly updated"})
     })
})

route.patch("/people",function(request,response){
    people.updateMany({sno:request.query.sno},{$set:request.body},function(err,data){
   if(err)
       response.status(500).send("Server error");
   else
       response.json({result:"Successfuly updated"})
    })
})


route.delete("/people/:sno",function(request,response){
    people.remove({sno:request.params.sno},function(err,data){
   if(err)
       response.status(500).send("Server error");
   else
       response.json({result:"Successfully Deleted"})
    })
})

module.exports = route