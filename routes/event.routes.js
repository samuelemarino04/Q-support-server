const { getAllEvents, getOneEvent, saveEvent, joinEvent, unjoinEvent, removeEvent, editEvent, getFilteredEvents, getEventsByOwner } = require("../controllers/event.controllers")

const { verifyToken } = require("../middleware/verifyToken")
const router = require("express").Router()

router.get("/getAllEvents", getAllEvents)
router.get("/getOneEvent/:event_id", getOneEvent)
router.get("/getFilteredEvents", getFilteredEvents)
router.get("/getEventsByOwner/:owner_id", getEventsByOwner)
router.post("/saveEvent", verifyToken, saveEvent)
router.put("/:event_id/edit-event", verifyToken, editEvent)
router.post("/:event_id/join-event", verifyToken, joinEvent)
router.post("/:event_id/unjoin-event", verifyToken, unjoinEvent)
router.post("/:event_id/remove-event", verifyToken, removeEvent)

module.exports = router