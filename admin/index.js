const Express = require("express");
const router = Express.Router();
const UserController = require('./admin.controller')

router.post('/register', UserController.signup)

module.exports = router;