
var express = require("express")
var ops=require("../../database/dbops")
var route=express.Router()
var crypto=require('../../security/crypto')
const jwt=require("jsonwebtoken");
var passport = require("passport")
require('../../security/tokenverify')(passport)


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

route.post("/signin",async function(request,response){
      const {username,password}=request.body 
      try{
         
         let originalencrypted=await ops.getPassword(username)
         let user={username:username,password:originalencrypted}
         if(await crypto.compare(password,originalencrypted)){
               
         let token = jwt.sign(user,"sterling-web-app-secret-key")
         
         response.json({success:true,access_token: token})
         }
         else
            response.status(401).send("Not Authorized")
   }
   catch(e){
       console.log(e)
       response.status(500).send("Cannot sign in")
   }
})




module.exports = route