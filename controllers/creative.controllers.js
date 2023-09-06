const User = require('../models/User.model')

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

    // if (searchQuery) {
    //     query.username = { $regex: new RegExp(searchQuery, 'i') }
    //     console.log("esto es lo que me llega alsearchquery del if", searchQuery)
    // }

    // if (category) {
    //     query.category = category
    //     console.log("esto es lo que me llega category del if", category)

    // }

    searchQuery && (query.username = { $regex: new RegExp(searchQuery, 'i') })
    category && (query.category = category)

    console.log("esto es lo que ha dentro de query.username", query.username)
    console.log("esto es lo que ha dentro de query.category", query.category)
    console.log("esto es lo que ha dentro de query", query)


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
