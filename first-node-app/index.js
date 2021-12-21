const express=require('express');
const path = require('path');
const ops = require("./database/dbops")

const app = express();

app.use(express.urlencoded({
    extended:true
}))

app.use(express.json())

//allow direct access for the static resources present in the given pathv
app.use(express.static(path.join(__dirname, 'public/styles')));

app.use(express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));

app.use(express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));

app.get("/",function(request,response){
    response.send("Hey Hi!!! Node is up and running")
})

app.post("/store",function(request,response){
     console.log(request.body)
     const {sno,name,city}=request.body
     ops.addPerson(sno,name,city,function(err,data){
         if(err) 
            response.status(500).send("Server error")
         else
            response.redirect("/home")
     })   
})

app.get("/home",function(request,response){
    response.sendFile(path.join(__dirname,"public/index.html"))
})
app.listen("4000",function(){
    console.log("Server is started on port 4000")
})