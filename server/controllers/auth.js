import { db } from "../connect.js"
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken"

// user registration
export const register = (req, res) => {
    // check user if exists
    const q = "SELECT * FROM users WHERE userName = ?"
    db.query(q, [req.body.userName], (err, data) => {
        if (err) return res.status(500).json(err)
        if (data.length) return res.status(409).json("User already exists!")
        // create new user
        // hash password
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(req.body.password, salt)

        const q = "INSERT INTO users (`userName`,`email`,`password`,`firstName`,`lastName` ) VALUE (?)"
        const values = [req.body.userName, req.body.email, hashedPassword, req.body.firstName, req.body.lastName]
        db.query(q, [values], (err, data) => {
            if (err) return res.status(500).json(err)
            return res.status(200).json("User has been created!")
        })
    })
}

// user login
export const login = (req, res) => {
    const q = "SELECT * FROM users WHERE userName= ?"
    db.query(q, [req.body.userName], (err, data) => {
        if (err) return res.status(500).json(err)
        if (data.length === 0) return res.status(404).json("User not found!")

        const checkPassword = bcrypt.compareSync(req.body.password, data[0].password)
        if (!checkPassword) return res.status(400).json("Wrong password or usrname")

        const token = jwt.sign({ id: data[0].id }, "secretKey")

        const { password, ...others } = data[0]

        res
            .cookie("accessToken", token, {
                httpOnly: true,
            })
            .status(200)
            .json(others)
    })
}

// user logout
export const logout = (req, res) => {

}