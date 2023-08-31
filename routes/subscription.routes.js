const { getAllSubscriptions,
    getOneSubscription,
    saveSubscription } = require("../controllers/subscription.controller")
const router = require("express").Router()
const { verifyToken } = require("../middleware/verifyToken")

router.get("/getAllSubscriptions", getAllSubscriptions)
router.get("/getOneSubscription/:subscription_id", getOneSubscription)
router.post("/savesubscription", verifyToken, saveSubscription)

module.exports = router