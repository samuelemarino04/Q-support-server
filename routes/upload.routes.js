const router = require("express").Router()
const uploaderMiddleware = require("../middleware/uploader.middleware")

const {
    image,
    images
} = require('./../controllers/upload.controllers')

router.post('/image', uploaderMiddleware.single('imageData'), image)
router.post('/images', uploaderMiddleware.array('imagesData', 10), images)

module.exports = router

