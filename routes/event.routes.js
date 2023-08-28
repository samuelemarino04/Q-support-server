const router = require("express").Router()

const Event = require('./../models/Event.model')

router.get("/getAllEvent", (req, res) => {

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

    const { title, icon, description, attendees, address, location, date, comments, organised_by, created_by } = req.body

    Event
        .create({ title, icon, description, attendees, address, location, date, comments, organised_by, created_by })
        .then(() => res.sendStatus(200))
        .catch(err => next(err))
})

module.exports = router