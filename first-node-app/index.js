const express=require('express');
const path = require('path');

const app = express();

//allow direct access for the static resources present in the given pathv
app.use(express.static(path.join(__dirname, 'public/styles')));

app.use(express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));

app.use(express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.get("/",function(request,response){
    response.send("Hey Hi!!! Node is up and running")
})

app.get("/home",function(request,response){
    response.sendFile(path.join(__dirname,"public/index.html"))
})
app.listen("4000",function(){
    console.log("Server is started on port 4000")
})