const { getAllSubscriptions,
    getOneSubscription,
    saveSubscription } = require("../controllers/subscription.controller")
const router = require("express").Router()


router.get("/getAllSubscriptions", getAllSubscriptions)
router.get("/getOneSubscription/:subscription_id", getOneSubscription)
router.post("/savesubscription", saveSubscription)

module.exports = router