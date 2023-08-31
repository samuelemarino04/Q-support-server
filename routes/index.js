const router = require("express").Router()

const userRoutes = require("./user.routes")
router.use('/user', userRoutes)

const subscriptionRoutes = require("./subscription.routes")
router.use("/subscriptions", subscriptionRoutes)

const eventRoutes = require("./event.routes")
router.use("/events", eventRoutes)

const uploadRoutes = require("./upload.routes")
router.use("/upload", uploadRoutes)

const authRoutes = require("./auth.routes")
router.use("/auth", authRoutes)

const creativeRoutes = require("./creative.routes")
router.use("/creative", creativeRoutes)



module.exports = router