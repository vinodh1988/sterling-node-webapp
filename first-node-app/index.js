const express=require('express');
const path = require('path');
const ops = require("./database/dbops")
const people = require('./routes/person-api/people')

const app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sterling');


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log("mongo db connection is open");
});



app.use(express.urlencoded({
    extended:true
}))

app.use(express.json())

//allow direct access for the static resources present in the given pathv
app.use(express.static(path.join(__dirname, 'public/styles')));

app.use(express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));

app.use(express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));

app.set('views', path.join(__dirname, 'public/views'));//setting the path of template files
app.set('view engine', 'pug'); //configuring view Engine

app.use("/people-api",people);

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
     response.send("hi")
})

app.get("/people-template",function(request,response){
    ops.readAll(function(err,data){
        if(err) 
            response.send("No Data found")
        else
            response.render('people',{people:data})
    })
})

app.get("/home",function(request,response){
    response.sendFile(path.join(__dirname,"public/index.html"))
})
app.listen("4000",function(){
    console.log("Server is started on port 4000")
})