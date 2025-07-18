import express from 'express'
import {createProduct,getProduct,updateProduct,deleteProduct,getProductbyid}from '../controllers/Productcontroller.js'


const router=express.Router()


router.post('/',createProduct)   // 1.
router.get ('/',getProduct)      //2.
router.put ('/:id',updateProduct) // 3. 
router.delete('/:id',deleteProduct) // 4.
router.get('/:id',getProductbyid)   // 5.



export default router