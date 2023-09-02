import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
const app = express()

app.listen(process.env.PORT, () => console.log(`Server connected succesfully🚀`))