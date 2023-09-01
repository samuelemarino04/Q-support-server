const Subscription = require("../models/Subscription.model")

const getAllSubscriptions = (req, res) => {

    Subscription
        .find()
        .sort({ createdAt: -1 })
        .select({ title: 1, type: 1, amount: 1, description: 1, image: 1, owner: 1 })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const getSubscriptionsByOwner = (req, res, next) => {

    const { owner_id } = req.params

    Subscription
        .find({ owner: owner_id })
        .sort({ createdAt: -1 })
        .select({ title: 1, type: 1, amount: 1, description: 1, image: 1, owner: 1 })
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

    const { title, type, amount, description, image } = req.body
    const { _id: owner } = req.payload

    Subscription
        .create({ title, type, amount, description, image, owner })
        .then(() => res.sendStatus(200))
        .catch(err => next(err))
}


module.exports = {
    getAllSubscriptions,
    getOneSubscription,
    saveSubscription,
    getSubscriptionsByOwner
}