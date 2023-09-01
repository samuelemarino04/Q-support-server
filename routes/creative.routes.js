const router = require("express").Router()
const User = require('../models/User.model')

const {
    getAllCreatives,
} = require('./../controllers/creative.controllers')

router.get("/getAllCreatives", getAllCreatives)

module.exports = router