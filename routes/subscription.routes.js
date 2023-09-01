const router = require("express").Router()

const { getAllSubscriptions,
    getOneSubscription,
    saveSubscription,
    getSubscriptionsByOwner } = require("../controllers/subscription.controller")

const { verifyToken } = require("../middleware/verifyToken")


router.get("/getAllSubscriptions", getAllSubscriptions)

router.get("/getOneSubscription/:subscription_id", getOneSubscription)

router.post("/savesubscription", verifyToken, saveSubscription)

router.get("/getSubscriptionsByOwner/:owner_id", getSubscriptionsByOwner)

module.exports = router