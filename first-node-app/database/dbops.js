const db=require('./dbconfig')


const personCrud={
    readAll: function(callback){
        db.query("select * from person",callback)
    },

    addPerson: function(sno,name,city,callback){
        db.query("insert into person values(?,?,?)",[sno,name,city],callback)
    }
}

module.exports = personCrud;