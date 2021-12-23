const db=require('./dbconfig')


const personCrud={
    readAll: function(callback){
        db.query("select * from person",callback)
    },

    addPerson: function(sno,name,city,callback){
        db.query("insert into person values(?,?,?)",[sno,name,city],callback)
    },
    addUser: function(username,password,callback){
        db.query("insert into users values(?,?)",[username,password],callback)
    },
    getUser:function(username,callback){
        db.query("select * from users where username=?",[username],callback)
       },
    getPassword:sendPassword

}


function sendPassword(username){
    return new Promise(function(resolve,reject){
        personCrud.getUser(username,function(err,data){
            if(err) 
               reject(err)
            else 
               resolve(data[0]?data[0].password:undefined)
        })
    })
}


module.exports = personCrud;