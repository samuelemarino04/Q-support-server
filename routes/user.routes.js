const router = require("express").Router()
const User = require('../models/User.model')
const { verifyToken } = require("../middleware/verifyToken")

const {
    getAllUsers,
    getOneUser,
    saveUser,
    editCreative,
    removePhotoCreative,
    getUserSubscriptions,
    editProfile
    // deleteUser,
} = require('./../controllers/user.controllers')

router.get("/getAllUsers", getAllUsers)

router.get("/getOneUser/:user_id", getOneUser)

router.post("/saveUser", saveUser)

// router.delete("/deleteUser/:user_id", verifyToken, deleteUser)

router.put("/editProfile/:user_id", verifyToken, editProfile)

router.post("/editCreative/:id", verifyToken, editCreative)

router.post("/removePhotoCreative", verifyToken, removePhotoCreative)

router.get("/userSubscriptions/:_id", verifyToken, getUserSubscriptions)


module.exports = router