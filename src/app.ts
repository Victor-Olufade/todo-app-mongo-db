import express from 'express'
import { appendFile } from 'fs'
import logger from 'morgan'
import todoRouter from './routes/todo'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

mongoose.connect(process.env.DATABASE_URL!, ()=>{
    console.log("Database connected");
    
})

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(logger("dev"))

app.use('/todo', todoRouter)

const port = 4500
app.listen(port, ()=>{
    console.log( `server listening on ${port}`);
   
})