const router = require("express").Router()

const Client = require('../models/Client.model')

router.get("/getAllclients", (req, res) => {

    Client
        .find()
        .sort({ username: 1 })
        .select({ username: 1, avatar: 1 })
        .then(response => res.json(response))
        .catch(err => next(err))
})


router.get("/getOneclient/:cliente_id", (req, res, next) => {

    const { client_id } = req.params

    Client
        .findById(client_id)
        .then(response => res.json(response))
        .catch(err => next(err))
})


router.post("/saveClient", (req, res, next) => {

    const { username, avatar, edad, pronouns, role, email, password, bio, location } = req.body

    Client
        .create({ username, avatar, edad, pronouns, role, email, password, bio, location })
        .then(() => res.sendStatus(200))
        .catch(err => next(err))
})

module.exports = router