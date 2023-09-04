const { getAllEvents,
    getOneEvent,
    saveEvent,
    getFilteredEvents } = require("../controllers/event.controllers")

const router = require("express").Router()



router.get("/getAllEvents", getAllEvents)
router.get("/getOneEvent/:event_id", getOneEvent)
router.get("/getFilteredEvents", getFilteredEvents)
router.post("/saveEvent", saveEvent)

module.exports = router