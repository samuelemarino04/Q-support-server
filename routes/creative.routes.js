const router = require("express").Router()
const User = require('../models/User.model')

const {
    getAllCreatives,
    // getOneUser,
    // saveUser
} = require('./../controllers/creative.controllers')

router.get("/getAllCreatives", getAllCreatives)

// router.get("/getOneUser/:user_id", getOneUser)

// router.post("/saveUser", saveUser)


module.exports = router