const router = require("express").Router()

const { getAllSubscriptions,
    getOneSubscription,
    getSubscriptionsByOwner,
    saveSubscription,
    editSubscription
} = require("../controllers/subscription.controller")

const { verifyToken } = require("../middleware/verifyToken")


router.get("/getAllSubscriptions", getAllSubscriptions)
router.get("/getOneSubscription/:subscription_id", getOneSubscription)
router.post("/savesubscription", verifyToken, saveSubscription)
router.get("/getSubscriptionsByOwner/:owner_id", getSubscriptionsByOwner)
router.put("/editSubscription/:subscription_id", verifyToken, editSubscription)

module.exports = router