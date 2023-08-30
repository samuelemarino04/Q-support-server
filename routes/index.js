const router = require("express").Router()

// TODO: DESACOPLAR CONTROLLERS

const userRoutes = require("./user.routes")
router.use('/user', userRoutes)

const subscriptionRoutes = require("./subscription.routes")
router.use("/subscriptions", subscriptionRoutes)

const eventRoutes = require("./event.routes")
router.use("/events", eventRoutes)

//para subir imágenes a cloudinary  👇
const uploadRoutes = require("./upload.routes")
router.use("/upload", uploadRoutes)

const authRoutes = require("./auth.routes")
router.use("/auth", authRoutes)

module.exports = router