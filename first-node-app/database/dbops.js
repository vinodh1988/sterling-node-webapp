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
    }
}

module.exports = personCrud;