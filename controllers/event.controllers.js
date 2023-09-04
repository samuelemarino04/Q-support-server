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

    console.log("este es el objeto category que le estoy pasando a la función", searchQuery)

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

    Event
        .create({ title, icon, description, address, date })
        .then(() => res.sendStatus(200))
        .catch(err => next(err))
}

module.exports = {
    getAllEvents,
    getOneEvent,
    getFilteredEvents,
    saveEvent
}