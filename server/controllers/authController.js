import User from '../models/User.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

// register new user
export const register = async (req, res) => {
    try {
        // checking if the fields are empty
        const isEmpty = Object.values(req.body).some((v) => !v)
        if (isEmpty) {
            throw new Error("Fill all fields!")
        }
        // checking if user is exist or not
        const isExisting = await User.findOne({ username: req.body.username })
        if (isExisting) {
            throw new Error("Username has been already used")
        }
        // hashing password
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const newUser = await User.create({ ...req.body, password: hashedPassword })

        const payload = { id: newUser._id, username: newUser.username }
        const token = jwt.sign(payload, process.env.JWT_SECRET)

        const { password, ...others } = newUser._doc
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
            throw new Error('Invalid credentials!')
        }

        const comparePass = await bcrypt.compare(req.body.password, user.password)
        if (!comparePass) {
            throw new Error('Invalid Credentials');
        }

        const payload = { id: user._id, username: user.username }
        const { password, ...others } = user._doc
        const token = jwt.sign(payload, process.env.JWT_SECRET)

        return res.status(200).json({ token, others })

    } catch (error) {
        return res.status(500).json(error.message)
    }
}
