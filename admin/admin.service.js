const AdminModel = require('./admin.model')

exports.createUser = function(data){


    return new Promise(function(resolve,reject){
       data.email= data.email.toLowerCase();
      var userdata = AdminModel(data) 
      userdata.save().then(function(result){
           console.log("result of mongodb operation",result)
           resolve(result);
       },
       function(error){ //error returned by mongodb 
           console.log("Error in saving user to database",error)
           if(error.code == 11000){
               reject(error);
           }
           reject();
       })
    })
   }
   