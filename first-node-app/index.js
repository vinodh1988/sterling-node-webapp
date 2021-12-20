const express=require('express');
const path = require('path');

const app = express();

app.get("/",function(request,response){
    response.send("Hey Hi!!! Node is up and running")
})

app.get("/home",function(request,response){
    response.sendFile(path.join(__dirname,"public/index.html"))
})
app.listen("4000",function(){
    console.log("Server is started on port 4000")
})