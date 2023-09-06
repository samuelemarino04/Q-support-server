const Subscription = require("../models/Subscription.model")

const getAllSubscriptions = (req, res) => {

    Subscription
        .find()
        .sort({ createdAt: -1 })
        .select({ title: 1, type: 1, price: 1, currency: 1, paymentFrequency: 1, description: 1, image: 1, owner: 1 })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const getSubscriptionsByOwner = (req, res, next) => {

    const { owner_id: owner } = req.params

    Subscription
        .find({ owner })
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

    const { title, type, price, currency, paymentFrequency, description, image } = req.body
    const { _id: owner } = req.payload

    Subscription

        .create({ title, type, price, currency, paymentFrequency, description, image, owner })
        .then(() => res.sendStatus(200))
        .catch(err => next(err))
}

const editSubscription = (req, res, next) => {

    const { subscription_id } = req.params
    const formData = req.body

    Subscription
        .findByIdAndUpdate(subscription_id, formData)
        .then(() => res.sendStatus(200))
        .catch(err => next(err))
}

const deleteSubscription = (req, res, next) => {

    const { subscription_id } = req.params

    Subscription
        .findByIdAndDelete(subscription_id)
        .then(() => res.sendStatus(200))
        .catch(err => next(err))
}

const subscribe = (req, res, next) => {

    const { subscription_id } = req.params
    const { _id: user_id } = req.payload

    Subscription
        .findByIdAndUpdate(subscription_id, { $addToSet: { clients: user_id } })
        .then(() => res.sendStatus(200))
        .catch(err => next(err))
}

const unsubscribe = (req, res, next) => {

    const { subscription_id } = req.params
    const { _id: user_id } = req.payload

    Subscription
        .findByIdAndUpdate(subscription_id, { $pull: { clients: user_id } })
        .then(() => res.sendStatus(200))
        .catch(err => next(err))
}


module.exports = {
    getAllSubscriptions,
    getOneSubscription,
    getSubscriptionsByOwner,
    saveSubscription,
    editSubscription,
    deleteSubscription,
    subscribe,
    unsubscribe
}