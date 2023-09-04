const router = require("express").Router()
const User = require('../models/User.model')
const { verifyToken } = require("../middleware/verifyToken")

const {
    getAllUsers,
    getOneUser,
    saveUser,
    editCreative,
    removePhotoCreative,
    // deleteUser,
    // editProfile

} = require('./../controllers/user.controllers')

router.get("/getAllUsers", getAllUsers)

router.get("/getOneUser/:user_id", getOneUser)

router.post("/saveUser", saveUser)

// router.delete("/deleteUser/:user_id", verifyToken, deleteUser)

// router.put("/:user_id/editProfile", verifyToken, editProfile)

router.post("/editCreative/:id", editCreative)

router.post("/removePhotoCreative", verifyToken, removePhotoCreative)


module.exports = router