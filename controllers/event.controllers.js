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

const getFilteredEvents = (req, res) => {

    const { searchQuery } = req.query

    Event
        .find({ "address.city": { $regex: new RegExp(searchQuery, 'i') } })
        .sort({ "address.city": 1 })
        .then(response => {
            res.json(response)
        })
        .catch(err => console.log(err))
}

const saveEvent = (req, res, next) => {

    const { title, icon, description, address, date } = req.body
    const { _id: owner } = req.payload

    Event
        .create({ title, icon, description, address, date, owner })
        .then(() => res.sendStatus(200))
        .catch(err => next(err))
}

const editEvent = (req, res, next) => {

    const { event_id } = req.params
    const event = req.body              // TODO: nunca usar req.body para una transacci'on por seguridad

    Event
        .findByIdAndUpdate(event_id, event)
        .then(response => res.json(response))
        .catch(err => next(err))
}

const joinEvent = (req, res, next) => {

    const { event_id } = req.params
    const { _id: user_id } = req.payload

    Event
        .findByIdAndUpdate(event_id, { $addToSet: { attendees: user_id } })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const unjoinEvent = (req, res, next) => {

    const { event_id } = req.params
    const { _id: user_id } = req.payload

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

const getEventsByOwner = (req, res, next) => {

    const { owner_id } = req.params

    Event
        .find({ owner: owner_id })
        .sort({ createdAt: -1 })
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
    removeEvent,
    getFilteredEvents,
    getEventsByOwner
}