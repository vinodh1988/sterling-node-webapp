const items=["Pen","Pencil","Books"]

const fun=function(){
    console.log("running")
}

class Student{
    constructor(sno,name){
        this.sno=sno;
        this.name=name;
    }

    display(){
        console.log(this.sno,this.name)
    }
}

module.exports = {
    things: items,
    greet: fun,
    Student: Student
}
/**
 *  Javascript follows specifications that are released by ECMA
 *  until es6 ...the versions were called es3,es4, es5 ...the
 * 
 * from year 2015 ie., es6 they named specification after years
 * 
 * es2015
 * es2016
 * 
 * es2021
 * */