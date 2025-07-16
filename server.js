import express from 'express'
import dotenv  from'dotenv'
import connection from './config/connection.js'

dotenv.config()
const app=express()

app.use(express.json())

connection()

const PORT=process.env.PORT || 3000



app.listen(PORT, () =>{
console.log(`Server is running at port :${PORT}`)
})