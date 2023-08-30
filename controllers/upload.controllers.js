const image = (req, res) => {

    if (!req.file) {
        res.status(500).json({ errorMessage: 'Error cargando el archivo' })
        return
    }

    res.json({ cloudinary_url: req.file.path })
}


const images = (req, res) => {

    if (!req.files) {
        res.status(500).json({ errorMessage: 'Error loading file' })
        return
    }
    const urls = req.files.map(file => file.path)
    res.json({ cloudinary_urls: urls })
}

module.exports = {
    image,
    images
}
