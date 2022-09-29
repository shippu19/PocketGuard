const AdminModel = require('../admin/admin.model')
exports.findUser = function (data) {
    return new Promise(function (resolve, reject) {
        var queryObj = {
            email: data.email.toLowerCase(),
            password: data.password

        }
        AdminModel.findOne(queryObj).then(function (result) {
            console.log("Finding user from db", result)
            if (result) {
                resolve(result)
            }
            else {
                reject("Invalid Creds")
            }
        }).catch(function (error) {
            reject()
            console.log("error in finding db user")
        })
    })
}
exports.getHome = function(data){
    return new Promise(function (resolve, reject) {
        var queryObj = {
            email: data.email.toLowerCase()

        }
        AdminModel.findOne(queryObj).then(function (result) {
            console.log("Finding user from db", result)
            if (result) {
                resolve(result)
            }
            else {
                reject("Invalid Creds")
            }
        }).catch(function (error) {
            reject()
            console.log("error in finding db user")
        })
    })
}