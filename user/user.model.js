const Mongoose = require("mongoose")

const TransactionSchema = new Mongoose.Schema({
    refno:{type:Number},
    accountnumber:{type:Number,required:true,unique:true},
    amount:{type:Number,required:true},
    transactiondate:{type:String,default:new Date()},
    category:{type:String},
    receiver:{type:String,required:true},
    transactiontype:{type:String,required:true}
})

const TransactionModel = Mongoose.model("transaction",TransactionSchema) 

module.exports = TransactionModel