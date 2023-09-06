const User = require('../models/User.model')

// TODO: GESTIONAR SIEMPRE EXCEPCIONES CON next(err)

const getAllCreatives = (req, res) => {

    User
        .find({ role: 'CREATIVE' })
        .sort({ username: 1 })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const getFilteredCreatives = (req, res) => {

    const { searchQuery } = req.query

    User
        .find({ role: 'CREATIVE', username: { $regex: new RegExp(searchQuery, 'i') } })
        .sort({ username: 1 })
        .then(response => {
            res.json(response)
        })
        .catch(err => console.log(err))
}

const getCreativesByCategory = (req, res) => {

    const { category } = req.query

    User
        .find({ role: 'CREATIVE', category: { $in: [category] } })
        .sort({ username: 1 })
        .then(response => {
            res.json(response)
        })
        .catch(err => console.log(err))
}

module.exports = {
    getAllCreatives,
    getFilteredCreatives,
    getCreativesByCategory
}
