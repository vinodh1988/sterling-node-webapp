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

module.exports = route;