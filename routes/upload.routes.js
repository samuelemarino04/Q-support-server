//para subir imágenes a cloudinary  👇
const router = require("express").Router()
const uploaderMiddleware = require("../middleware/uploader.middleware")

const {
    image
} = require('./../controllers/upload.controllers')

router.post('/image', uploaderMiddleware.single('imageData'), image)


module.exports = router

