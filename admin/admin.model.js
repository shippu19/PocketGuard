const Mongoose = require("mongoose")

const AdminSchema = new Mongoose.Schema({
    name:{type:String,required:true},
    image:{type:String},
    address:{type:String,required:true},
    profilecompleted:{type:Boolean,default:false},
    dob:{type:Date,required:true},
    email:{type:String, unique:true,required:true
    //     ,validate:{
    //     validator:function(email){
    //         var re = /\S+@S+\.\S+/;
    //         return re.test(email);
    //     }
    // }
},
    password:{type:String,required:true},
    creationdate:{type:String,default:new Date()},
    verified:{type:Boolean,default:false},
    accounttype:{type:String,required:true},
    accountnumber:{type:Number,required:true,unique:true},
    ifsc:{type:String,required:true}
})

const AdminModel = Mongoose.model("admin",AdminSchema) // users is a collection in db where all the data's of this module will be stored
module.exports= AdminModel;