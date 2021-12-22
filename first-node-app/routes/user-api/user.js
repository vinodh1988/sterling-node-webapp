
var express = require("express")
var ops=require("../../database/dbops")
var route=express.Router()
var crypto=require('../../security/crypto')


route.post("/signup",async function(request,response){
      const {username,password}=request.body
      
      try{
            let encrypted=await crypto.encrypt(password)
            ops.addUser(username,encrypted,function(err,data){
                if(err) 
                   response.status(500).send("Unable to create user")
                else
                   response.status(201).send("user registered")
            })
      }
      catch(e){
          console.log(e)
          response.status(500).send("Cannot sign up")
      }
})


module.exports = route