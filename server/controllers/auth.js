import { db } from "../connect.js"

// user registration
export const register = (req, res) => {
    // check user if exists
    const q = "SELECT FROM users WHERE userName = ?"
    db.query(q, [req.body.userName], (err, data)=>{
        if(err) return res.status(500).json(err)
        if(data.length) return res.status(409).json("User already exists!")
    })
    // create new user
    // hash password
}

// user login
export const login = (req, res) => {

}

// user logout
export const logout = (req, res) => {

}