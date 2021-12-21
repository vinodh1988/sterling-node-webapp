const express=require('express');
const route=express.Router();
const ops = require('../../database/dbops')

route.get("/people",function(request,response){
    ops.readAll(function(err,data){
        if(err)
           response.status(500).send("Server issue")
        else
           response.json(data)
    })
})

route.post("/people",function(request,response){
    const {sno,name,city}=request.body;
   
    ops.addPerson(sno,name,city,function(err,data){
        if(err) 
           response.status(500).send("Server error")
        else
           response.status(201).json(request.body)
    })   
})

module.exports = route;