const Mongoose = require("mongoose")

const AdminSchema = new Mongoose.Schema({
    name:{type:String,required:true},
    image:{type:String},
    address:{type:String,required:true},
    profilecompleted:{type:Boolean,default:false},
    dob:{type:Date,required:true},
    email:{type:String, unique:true,required:true

},
    password:{type:String,required:true},
    creationdate:{type:String,default:new Date()},
    verified:{type:Boolean,default:false},
    accounttype:{type:String,required:true},
    accountnumber:{type:Number,required:true,unique:true},
    ifsc:{type:String,required:true},
    accountbalance:{type:Number,required:true,default:500},
    numberoftransactions:{type:Number,default:1}
})

const AdminModel = Mongoose.model("admin",AdminSchema) 
module.exports= AdminModel;