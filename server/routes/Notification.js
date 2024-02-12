import express from 'express'
import { verifyToken } from '../middlewares/auth.js'
import { getAllNotificaitons } from '../controllers/NotificationController.js'

const notificationRouter = express.Router()

notificationRouter.get('/', getAllNotificaitons)

export default notificationRouter