var mongoose=require('mongoose');

var people=mongoose.model('people',new mongoose.Schema(
    {
       sno: Number,
       name: String,
       city: String
     }
,
{collection:'people',versionKey: false}));

module.exports=people;