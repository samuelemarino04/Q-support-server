const router = require("express").Router()
const User = require('../models/User.model')

const {
    getAllCreatives,
    getFilteredCreatives,


} = require('./../controllers/creative.controllers')

router.get("/getAllCreatives", getAllCreatives)
router.get("/getFilteredCreatives", getFilteredCreatives)



module.exports = router