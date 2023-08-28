module.exports = app => {

    const userRoutes = require("./user.routes")
    app.use('/api/user', userRoutes)

    const subscriptionRoutes = require("./subscription.routes")
    app.use("/api/subscriptions", subscriptionRoutes)

    const eventRoutes = require("./event.routes")
    app.use("/api/events", eventRoutes)

}

