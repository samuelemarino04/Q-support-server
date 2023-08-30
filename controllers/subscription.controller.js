const Subscription = require("../models/Subscription.model")

const getAllSubscriptions = (req, res) => {

    Subscription
        .find()
        .sort({ createdAt: -1 })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const getOneSubscription = (req, res, next) => {

    const { subscription_id } = req.params

    Subscription
        .findById(subscription_id)
        .then(response => res.json(response))
        .catch(err => next(err))
}

const saveSubscription = (req, res, next) => {

    const { title, client, creative, type, amount, description, startDate, endDate, paymentMethod } = req.body

    Subscription
        .create({ title, client, creative, type, amount, description, startDate, endDate, paymentMethod })
        .then(() => res.sendStatus(200))
        .catch(err => next(err))
}


module.exports = {
    getAllSubscriptions,
    getOneSubscription,
    saveSubscription
}