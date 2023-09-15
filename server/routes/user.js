import { getUser, getAll, updateUser, deleteUser, getUserFriends, followUser, unfollowUser } from '../controllers/userController.js'
import express from 'express'
import { verifyToken } from '../middlewares/auth.js'
const userRouter = express.Router()

userRouter.get('/find-all', getAll)
userRouter.get('/find/:id', getUser)
userRouter.get('/find/friends/:id', getUserFriends)

userRouter.put('/update/:id', verifyToken, updateUser)
userRouter.put('/follow/:id', verifyToken, followUser)
userRouter.put('/un-follow/:id', verifyToken, unfollowUser)

userRouter.delete('/delete/:id', verifyToken, deleteUser)

export default userRouter