import User from '../models/User.js'
import jwt from 'jsonwebtoken'
import { compareString, createJWT, hashString } from '../utils/index.js'

// register new user
export const register = async (req, res) => {
    const { email } = req.body
    try {
        // checking if the fields are empty
        const isEmpty = Object.values(req.body).some((v) => !v)
        if (isEmpty) {
            throw new Error("Fill all fields!")
        }
        // checking if user is exist or not
        const isExisting = await User.findOne({ email })
        if (isExisting) {
            throw new Error("Username has been already used")
        }
        // hashing password
        const hashedPassword = await hashString(req.body.password)
        const newUser = await User.create({ ...req.body, password: hashedPassword })

        const payload = { id: newUser._id, username: newUser.username }
        const { password, ...others } = newUser._doc
        const token = createJWT(payload)

        return res.status(201).json({ token, others })

    } catch (error) {
        return res.status(500).json(error.message)
    }
}

// login user
export const login = async (req, res) => {
    try {

        const isEmpty = Object.values(req.body).some((v) => !v)
        if (isEmpty) {
            throw new Error('Please fill in the required field')
        }

        const user = await User.findOne({ email: req.body.email })
        if (!user) {
            throw new Error('No user linked to this email.Register to get started.')
        }

        const comparePass = await compareString(req.body.password, user.password)
        if (!comparePass) {
            throw new Error('Invalid Credentials');
        }

        const payload = { id: user._id, username: user.username }
        const { password, ...others } = user._doc
        const token = createJWT(payload)

        return res.status(200).json({ token, others })

    } catch (error) {
        return res.status(500).json(error.message)
    }
}
