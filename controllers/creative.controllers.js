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

    const { searchQuery, category } = req.query

    let query = { role: 'CREATIVE' }

    searchQuery && (query.username = { $regex: new RegExp(searchQuery, 'i') })
    category && (query.category = category)


    User
        .find(query)
        .sort({ username: 1 })
        .then(response => {
            res.json(response)
        })
        .catch(err => console.log(err))
}



module.exports = {
    getAllCreatives,
    getFilteredCreatives,
}
