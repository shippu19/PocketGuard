const AdminModel = require('./admin.model')
const TransactionModel = require('../user/user.model')
const receiver = 'Self'
const transactionType = 'Credit'
const transactionDefaultAmount = 500

exports.createUser = function(data){


    return new Promise(function(resolve,reject){
       data.email= data.email.toLowerCase();
       data.accountnumber = Math.floor(100000000 + Math.random() * 900000000)+Date.now()
       //Code for password encryption...
      var userdata = AdminModel(data) 
      userdata.save().then(function(result){
           console.log("Account created successfully...",result)
    
        try{
            var transaction = {}
            transaction.refno = Math.floor(1000 + Math.random() * 9000)
            transaction.accountnumber = data.accountnumber
            if(data.accountbalance)
            transaction.amount = data.accountbalance
            else
            transaction.amount = transactionDefaultAmount
            transaction.receiver = receiver
            transaction.transactiontype = transactionType
            var transactiondata = TransactionModel(transaction)
            transactiondata.save().then((res)=>{
                console.log('First Transaction updated...',res)
            })
        }
        catch(err){
            console.log('Error updating transaction...',err)
        }
           resolve(result);
       },
       function(error){ //error returned by mongodb 
           console.log("Error in account creation...",error)
           if(error.code == 11000){
               reject(error);
           }
           reject();
       })
    })
   }
   