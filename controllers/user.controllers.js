const Subscription = require('../models/Subscription.model')
const User = require('../models/User.model')

const getAllUsers = (req, res, next) => {

    User
        .find()
        .sort({ username: 1 })
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

    const { username, avatar, edad, pronouns, role, category, email, password, bio, location } = req.body

    User
        .create({ username, avatar, edad, pronouns, role, category, email, password, bio, location })
        .then(() => res.sendStatus(200))
        .catch(err => next(err))
}

const deleteUser = (req, res, next) => {

    const { user_id } = req.params

    User
        .findByIdAndDelete(user_id)
        .then(response => res.json(response))
        .catch(err => next(err))

}

const editProfile = (req, res, next) => {

    const { user_id } = req.params
    const { userData } = req.body

    User
        .findByIdAndUpdate(user_id, userData)
        .then(response => res.json(response))
        .catch(err => next(err))
}

const editCreative = (req, res, next) => {

    const { _id: user_id } = req.payload
    const { images } = req.body

    User
        .findByIdAndUpdate(user_id, { $push: { images } })
        .then(() => res.sendStatus(200))
        .catch(err => next(err))
}

const editCardInfo = (req, res, next) => {
    console.log("esto es lo que me lelga por reqbody", req.body)
    const { user_id } = req.params
    const { formData } = req.body

    User
        .findByIdAndUpdate(user_id, { cardData: formData })
        .then(response => res.json(response))
        .catch(err => next(err))

}

const removePhotoCreative = (req, res, next) => {

    const { _id: user_id } = req.payload
    const { images } = req.body

    User
        .findByIdAndUpdate(user_id, { $pull: { images } })
        .then(() => res.sendStatus(200))
        .catch(err => next(err))
}

const getUserSubscriptions = (req, res, next) => {

    const { _id: user_id } = req.payload

    Subscription
        .find({ clients: user_id })
        .then(subscriptions => {
            res.json(subscriptions)
        })
        .catch(err => next(err))
}

module.exports = {
    getAllUsers,
    getOneUser,
    saveUser,
    deleteUser,
    editProfile,
    editCreative,
    editCardInfo,
    removePhotoCreative,
    getUserSubscriptions
}
