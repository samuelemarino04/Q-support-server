const { verifyToken } = require('../middleware/verifyToken')
const Event = require('./../models/Event.model')

const getAllEvents = (req, res) => {

    Event
        .find()
        .sort({ createdAt: -1 })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const getOneEvent = (req, res, next) => {

    const { event_id } = req.params

    Event
        .findById(event_id)
        .then(response => res.json(response))
        .catch(err => next(err))
}

const saveEvent = (req, res, next) => {

    const { title, icon, description, address, date } = req.body

    Event
        .create({ title, icon, description, address, date })
        .then(() => res.sendStatus(200))
        .catch(err => next(err))
}

const editEvent = (req, res, next) => {
    const { event_id } = req.params
    const event = req.body

    Event
        .findByIdAndUpdate(event_id, event)
        .then(response => res.json(response))
        .catch(err => next(err))
}

const joinEvent = (req, res, next) => {

    const { event_id } = req.params
    const user_id = req.payload._id

    Event
        .findByIdAndUpdate(event_id, { $addToSet: { attendees: user_id } })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const unjoinEvent = (req, res, next) => {

    const { event_id } = req.params
    const user_id = req.payload._id

    Event
        .findByIdAndUpdate(event_id, { $pull: { attendees: user_id } })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const removeEvent = (req, res, next) => {
    const { event_id } = req.params

    Event
        .findByIdAndDelete(event_id)
        .then(response => res.json(response))
        .catch(err => next(err))
}

module.exports = {
    getAllEvents,
    getOneEvent,
    saveEvent,
    editEvent,
    joinEvent,
    unjoinEvent,
    removeEvent
}