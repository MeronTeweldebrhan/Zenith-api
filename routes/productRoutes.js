import express from 'express'
import {createProduct,getProduct,updateProduct,deleteProduct,getProductbyid}from '../controllers/Productcontroller.js'


const router=express.Router()


router.post('/',createProduct)
router.get ('/',getProduct)
router.put ('/:id',updateProduct)
router.delete('/:id',deleteProduct)
router.get('/:id',getProductbyid)



export default router