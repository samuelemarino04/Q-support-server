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
    const userData = req.body

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
    const { user_id } = req.params
    const { formData } = req.body
    console.log(req.body)

    const errors = []

    if (formData.cardHolder === '') {
        errors.push("Provide card holder name")
    }

    if (formData.cardNumber === '') {
        errors.push("Provide card number")
    }


    if (formData.cardNumber.length != 16) {
        errors.push("Card number must have 16 digits")
    }


    if (formData.expiringDate === '') {
        errors.push("Provide expiring date")
    }


    if (formData.expiringDate.length != 5) {
        errors.push("Expiring date must be 4 in format MM/YY")
    }


    if (formData.cvv === '') {
        errors.push("Provide CVV")
    }


    if (formData.cvv.length != 3) {
        errors.push("CVV must have 3 digits")
    }

    if (errors.length != 0) {
        res.status(400).json({ messages: errors })
        return
    }

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
