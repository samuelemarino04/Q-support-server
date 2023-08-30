const router = require("express").Router()
const { verifyToken } = require("../middleware/verifyToken")


const {
    signup,
    login,
    verify
} = require('./../controllers/auth.controllers')

router.post('/signup', signup)

router.post('/login', login)

router.get('/verify', verifyToken, verify)

module.exports = router