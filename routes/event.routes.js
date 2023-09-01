const { getAllEvents, getOneEvent, saveEvent } = require("../controllers/event.controllers")

const router = require("express").Router()

router.get("/getAllEvents", getAllEvents)
router.get("/getOneEvent/:event_id", getOneEvent)
router.post("/saveEvent", saveEvent)

module.exports = router