//para subir imágenes a cloudinary  👇
const router = require("express").Router()

const uploaderMiddleware = require("../middleware/uploader.middleware")


uploaderMiddleware

router.post('/image', uploaderMiddleware.single('imageData'), (req, res) => {

    if (!req.file) {
        res.status(500).json({ errorMessage: 'Error cargando el archivo' })
        return
    }

    res.json({ cloudinary_url: req.file.path })
})


module.exports = router
