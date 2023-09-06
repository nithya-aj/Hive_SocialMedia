import User from '../models/User.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export const register = async (req, res) => {
    try {
        const isEmpty = Object.values(req.body).some((v) => !v)
        if (isEmpty) {
            throw new Error("Fill all fields!")
        }

        const isExisting = await User.findOne({ username: req.body.username })
        if (isExisting) {
            throw new Error("Username has been already used")
        }

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

export const login = async (req, res) => {

}
