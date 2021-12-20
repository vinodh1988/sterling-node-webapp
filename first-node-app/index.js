const express=require('express');

const app = express();

app.get("/",function(request,response){
    response.send("Hey Hi!!! Node is up and running")
})

app.listen("4000",function(){
    console.log("Server is started on port 4000")
})