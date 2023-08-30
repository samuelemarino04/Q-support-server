const router = require("express").Router()
const User = require('../models/User.model')

const {
    getAllUsers,
    getOneUser,
    saveUser
} = require('./../controllers/user.controllers')

router.get("/getAllUsers", getAllUsers)

router.get("/getOneUser/:user_id", getOneUser)

router.post("/saveUser", saveUser)


module.exports = router