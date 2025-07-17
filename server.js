import express from 'express'
import dotenv  from'dotenv'
import connection from './config/connection.js'
import productRoutes from './routes/productRoutes.js'

dotenv.config()
const app=express()
const PORT=process.env.PORT || 3000
app.use(express.json())

connection()

app.use('/api/product',productRoutes)





app.listen(PORT, () =>{
console.log(`Server is running at port :${PORT}`)
})