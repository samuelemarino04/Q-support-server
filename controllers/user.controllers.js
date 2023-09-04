const User = require('../models/User.model')

const getAllUsers = (req, res) => {

    User
        .find()
        .sort({ username: 1 })
        // TODO: PROYECTAR
        .then(response => res.json(response))
        .catch(err => next(err))
}

const getOneUser = (req, res, next) => {

    const { user_id } = req.params

    User
        .findById(user_id)
        .then(response => res.json(response))
        .catch(err => next(err))
}

const saveUser = (req, res, next) => {

    const { username, avatar, edad, pronouns, role, category, email, password, bio, location } = req.body

    User
        .create({ username, avatar, edad, pronouns, role, category, email, password, bio, location })
        .then(() => res.sendStatus(200))
        .catch(err => next(err))
}
//borrar perfiles cualquier usuario
// const deleteUser = (req, res, next) => {
//     const { user_id } = req.params
//     User
//         .findByIdAndDelete(user_id)
//         .then(response => res.json(response))
//         .catch(err => next(err))

// }
//editar perfiles cualquier usuario
// const editProfile = (req, res, next) => {
//     const { user_id } = req.params
//     const user = req.body

//     User
//         .findByIdAndUpdate(user_id, user)
//         .then(response => res.json(response))
//         .catch(err => next(err))
// }

//edicion fotos
const editCreative = (req, res, next) => {

    const { id } = req.params
    const { images } = req.body
    User
        .findByIdAndUpdate(id, { $push: { images } })
        .then(() => res.sendStatus(200))
        .catch(err => next(err))
}
//borrar fotos
const removePhotoCreative = (req, res, next) => {

    const { _id } = req.payload
    const { images } = req.body

    User
        .findByIdAndUpdate(_id, { $pull: { images: images } })
        .then(() => res.sendStatus(200))
        // .then(response => res.jason(response))
        .catch(err => next(err))
}


module.exports = {
    getAllUsers,
    getOneUser,
    saveUser,
    // deleteUser,
    // editProfile,
    editCreative,
    removePhotoCreative
}
