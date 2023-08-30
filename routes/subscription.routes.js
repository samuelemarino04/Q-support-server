const router = require("express").Router()

const Subscription = require("../models/Subscription.model")


router.get("/getAllSubscriptions", (req, res) => {

    Subscription
        .find()
        .sort({ createdAt: -1 })
        .select({ client: 1, creative: 1, type: 1 })
        .then(response => res.json(response))
        .catch(err => next(err))
})


router.get("/getOneSubscription/:subscription_id", (req, res, next) => {

    const { subscription_id } = req.params

    Subscription
        .findById(subscription_id)
        .then(response => res.json(response))
        .catch(err => next(err))
})


router.post("/savesubscription", (req, res, next) => {

    const { client, creative, type, startDate, endDate, paymentMethod } = req.body

    Subscription
        .create({ client, creative, type, startDate, endDate, paymentMethod })
        .then(() => res.sendStatus(200))
        .catch(err => next(err))
})

module.exports = router