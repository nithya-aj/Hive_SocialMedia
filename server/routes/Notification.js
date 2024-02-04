import express from 'express'
import {verifyToken} from '../middlewares/auth.js'

const notificationRouter = express.Router()

notificationRouter.get('/', getAllNotificaitons)
