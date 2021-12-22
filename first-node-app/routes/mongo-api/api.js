const express=require('express');
const route=express.Router();
const people=require('../../mongodb/schema')

route.get("/people",function(request,response){
    people.find({},{_id:0},function(err,data){
        if(err)
            response.status(500).send("Server error");
        else
            response.json(data)
    })
})

module.exports = route