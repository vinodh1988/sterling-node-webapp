var JwtStrategy = require('passport-jwt').Strategy,
ExtractJwt = require('passport-jwt').ExtractJwt;
const ops=require('../database/dbops')

// load up the user model



module.exports = function(passport) {

console.log("----------------------------------------");
var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("Bearer");
opts.secretOrKey = "sterling-web-app-secret-key"
passport.use(new JwtStrategy(opts, async function(jwt_payload, done) {
    if(jwt_payload.username){
       let pass = await ops.getPassword(jwt_payload.username)
       if(pass==jwt_payload.password)
             done(null,{user:"vinodh"})
       else
             done(null,false)
    }
       else
             done(null,false)
  }))
}
