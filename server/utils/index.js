import bcrypt from 'bcrypt'
import JWT from 'jsonwebtoken'

export const hashString = async (userValue) => {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(userValue, salt)
    return hashedPassword
}

export const compareString = async (password, userPassword) => {
    const isMatch = await bcrypt.compare(password, userPassword)
    return isMatch
}

export function createJWT(payload) {
    return JWT.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "1d"
    })
}