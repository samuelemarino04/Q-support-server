const router = require("express").Router()
const { verifyToken } = require("../middleware/verifyToken")

const {
    getAllUsers,
    getOneUser,
    saveUser,
    editCreative,
    removePhotoCreative,
    deleteUser,
    getUserSubscriptions,
    editProfile,
    editCardInfo

} = require('./../controllers/user.controllers')

router.get("/getAllUsers", getAllUsers)
router.get("/getOneUser/:user_id", getOneUser)
router.post("/saveUser", saveUser)
router.delete("/deleteUser/:user_id", verifyToken, deleteUser)
router.put("/editProfile/:user_id", verifyToken, editProfile)
router.put("/editCardInfo/:user_id", verifyToken, editCardInfo)
router.post("/editCreative/:id", verifyToken, editCreative)
router.post("/removePhotoCreative", verifyToken, removePhotoCreative)
router.get("/userSubscriptions/:_id", verifyToken, getUserSubscriptions)

module.exports = router