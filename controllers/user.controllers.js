const User = require('../models/User.model')

const getAllUsers = (req, res) => {

    User
        .find()
        .sort({ username: 1 })
        // TODO: PROYECTAR
        .then(response => res.json(response))
        .catch(err => next(err))
}

const getOneUser = (req, res, next) => {

    const { user_id } = req.params

    User
        .findById(user_id)
        .then(response => res.json(response))
        .catch(err => next(err))
}

const saveUser = (req, res, next) => {

    const { username, avatar, edad, pronouns, role, email, password, bio, location } = req.body

    User
        .create({ username, avatar, edad, pronouns, role, email, password, bio, location })
        .then(() => res.sendStatus(200))
        .catch(err => next(err))
}

const editCreative = (req, res, next) => {

    const { id } = req.params
    const { images } = req.body

    User
        .findByIdAndUpdate(id, { $push: { images } })
        .then(() => res.sendStatus(200))
        .catch(err => next(err))
}

const removePhotoCreative = (req, res, next) => {

    const { _id } = req.payload
    const { images } = req.body

    User
        .findByIdAndUpdate(_id, { $pull: { images: images } })
        .then(() => res.sendStatus(200))
        .catch(err => next(err))
}


module.exports = {
    getAllUsers,
    getOneUser,
    saveUser,
    editCreative,
    removePhotoCreative
}
