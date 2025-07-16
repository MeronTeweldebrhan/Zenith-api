import mongoose, { Schema } from 'mongoose'


const productSchema = new Schema ({
name:{
    type:String,
    required:true
},
description:{
    type:String,
    required:true
},
price:{
    type:Number,
    required:true,
    min:[0.01,'Price must be greater than 0']
},
categroy:{
    type:String,
    required:true
},
inStock:{
    type:Boolean,
    default:true
},
tags:{
   type: [String]
},
createdAt:{
   type: Date ,
   default :Date.now()
    }

})
const Product =mongoose.model("Product",productSchema)

export default Product