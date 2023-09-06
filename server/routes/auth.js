import { register, login } from '../controllers/authController'
import express from 'express'

const authRouter = express.Router()

authRouter.post('/register', register)
authRouter.post('/login', login)

module.exports = authRouter