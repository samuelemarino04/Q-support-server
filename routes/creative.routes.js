const router = require("express").Router()
const User = require('../models/User.model')

const {
    getAllCreatives,
    getFilteredCreatives,
    getCreativesByCategory

} = require('./../controllers/creative.controllers')

router.get("/getAllCreatives", getAllCreatives)

router.get("/getFilteredCreatives", getFilteredCreatives)

router.get("/getCreativesByCategory", getCreativesByCategory)


module.exports = router