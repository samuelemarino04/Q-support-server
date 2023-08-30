const router = require("express").Router()

const Event = require('./../models/Event.model')

router.get("/getAllEvents", (req, res) => {

    Event
        .find()
        .sort({ createdAt: -1 })
        .select({ title: 1, createdAt: -1 })
        .then(response => res.json(response))
        .catch(err => next(err))
})


router.get("/getOneEvent/:event_id", (req, res, next) => {

    const { event_id } = req.params

    Event
        .findById(event_id)
        .then(response => res.json(response))
        .catch(err => next(err))
})


router.post("/saveEvent", (req, res, next) => {

    const { title, icon, description, date, address } = req.body

    Event
        .create({ title, icon, description, address, date })
        .then(() => res.sendStatus(200))
        .catch(err => next(err))
})

module.exports = router