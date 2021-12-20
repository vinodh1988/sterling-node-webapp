const fs=require("fs")
const two=require('./second')

console.log(two.things)

two.greet();

const obj=new two.Student(1,"Raj")

obj.display();

fs.readFile("package.json","utf-8",function(err,data){
    if(err) 
       console.log(err);
    else
       console.log(data);

})

console.log("logic after file read");