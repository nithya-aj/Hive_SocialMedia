import { db } from "../connect.js"
import bcrypt from 'bcryptjs'

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

}

// user logout
export const logout = (req, res) => {

}