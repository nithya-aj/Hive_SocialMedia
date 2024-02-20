import express from 'express'
import { verifyToken } from '../middlewares/auth.js'
import { getNotificationsForUser  } from '../controllers/NotificationController.js'

const notificationRouter = express.Router()

notificationRouter.get('/:userId', getNotificationsForUser )

export default notificationRouter