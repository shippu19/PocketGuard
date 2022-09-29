const UserService = require('./admin.service')

exports.signup = (req, res) => {

  UserService.createUser(req.body).then((result) => {
    res.send({
      message: `User Created ${result}`
    })
    console.log("Result inside controller ...", result)
  }, (err) => {
    console.log("Error in controller...", err)
    res.status(500).send()
  })
}
