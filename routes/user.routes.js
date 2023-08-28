const router = require("express").Router()

const User = require('../models/User.model')

router.get("/getAllUsers", (req, res) => {

    User
        .find()
        .sort({ username: 1 })
        .select({ username: 1, avatar: 1 })
        .then(response => res.json(response))
        .catch(err => next(err))
})


router.get("/getOneUser/:user_id", (req, res, next) => {

    const { user_id } = req.params

    User
        .findById(user_id)
        .then(response => res.json(response))
        .catch(err => next(err))
})


router.post("/saveUser", (req, res, next) => {

    const { username, avatar, edad, pronouns, role, email, password, bio, location } = req.body

    User
        .create({ username, avatar, edad, pronouns, role, email, password, bio, location })
        .then(() => res.sendStatus(200))
        .catch(err => next(err))
})

module.exports = router