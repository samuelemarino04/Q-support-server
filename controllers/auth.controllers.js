const User = require("../models/User.model")
const bcrypt = require('bcryptjs')
const saltRounds = 10
const jwt = require('jsonwebtoken')

const signup = (req, res, next) => {

    const { username, birth, avatar, role, category, email, password, pronouns, aboutInfo, backgroundImage } = req.body

    if (password.length < 2) {
        res.status(400).json({ message: 'Password must have at least 3 characters' })
        return
    }

    User
        .findOne({ email })
        .then((foundUser) => {
            if (foundUser) {
                res.status(400).json({ message: "User already exists." })
                return
            }

            const salt = bcrypt.genSaltSync(saltRounds)
            const hashedPassword = bcrypt.hashSync(password, salt)

            return User.create({ username, birth, avatar, role, category, email, password: hashedPassword, pronouns, aboutInfo, backgroundImage })
        })
        .then(() => res.sendStatus(201))
        .catch(err => next(err))
}

const login = (req, res, next) => {

    const { email, password } = req.body

    if (email === '' || password === '') {
        res.status(400).json({ message: "Provide email and password" })
        return
    }

    User
        .findOne({ email })
        .then((foundUser) => {
            if (!foundUser) {
                res.status(401).json({ message: "User not found." })
                return
            }

            if (bcrypt.compareSync(password, foundUser.password)) {
                const { _id, email, username, role } = foundUser
                const payload = { _id, email, username, role }
                const authToken = jwt.sign(
                    payload,
                    process.env.TOKEN_SECRET,
                    { algorithm: 'HS256', expiresIn: "6h" }
                )

                res.status(200).json({ authToken })
            }
            else {
                res.status(401).json({ message: "Incorrect password" })
            }
        })
        .catch(err => next(err))
}

const verify = (req, res, next) => {

    const loggedUser = req.payload

    res.json({ loggedUser })
}

module.exports = {
    signup,
    login,
    verify
}