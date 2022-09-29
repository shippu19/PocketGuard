const Express = require("express");
const router = Express.Router();
var jwt = require('jsonwebtoken');
const UserController = require('./user.controller')
router.post('/login', UserController.login)
router.get('/dashboard',function(req,res,next){
    var token= req.get("Authorization")
    console.log("token : ",token)
    try{
        var payload =jwt.verify(token,"mysecretkey")
        console.log("payload",payload)
    }
    catch{
        console.log("token is not valid")
        res.status(401).send()
    }
    if(payload){
        req.body.email = payload.email
        next() //if not needed , remove 
    }
   
    console.log("token verification result: ",payload)
},UserController.getDashboard)
module.exports = router;