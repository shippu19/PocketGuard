const UserService = require('./user.service')
var jwt = require('jsonwebtoken');

exports.login = function (req, res) {
    UserService.findUser(req.body).then(function (result) {
  
      var payload = {
        email: req.body.email.toLowerCase()
      }
  
      console.log('response from backend...', result)
      var token = jwt.sign(payload, "mysecretkey");
      res.setHeader("Authorization", token)
  
      res.send({
        message: "Login Successful",
        user: result
      })
  
    }, function (error) {
      if (error) {
        res.status(500).send({
          message: "Invalid Creds"
        })
      }
      else {
        res.status(500).send()
      }
  
    })
  
  }

  exports.getDashboard = function(req,res){
    UserService.getHome(req.body).then(function (result) {
        console.log('response from backend...', result)
        res.send({
          message: "Details of the user recieved",
          user: {
            "name": result.name,
            "accountbalance": result.accountbalance,
            "accounttype": result.accounttype,
            "accountnumber": result.accountnumber,
        },
        })
    
      }, function (error) {
        if (error) {
          res.status(500).send({
            message: "Something went wrong in displaying the details."
          })
        }
        else {
          res.status(500).send()
        }
    
      })
  }