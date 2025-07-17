import Product from '../models/Productmodel.js'

//Create Prodcut
const createProduct=async (req,res)=>{
try {
    const newProduct = await Product.create(req.body)
    res.status(200).json(newProduct)
} catch (error) {
    console.error("Error creating Product:", error);
    res.status(400).json({ message: error.message });
}
   
}
// Get Product
const getProduct=async (req,res)=>{
 try {
        const prodcut= await Product.find()
        res.status(200).json(prodcut)
    } catch (error) {
        
    }
}
//Update Product
const updateProduct =async (req,res)=>{
const {id}=req.params
    try {
        const updateProduct= await Product.findByIdAndUpdate(id,req.body,{
            new:true
        })
        res.status(200).json(updateProduct)

    } catch (error) {
        console.error("Error Updating Product :", error);
    res.status(400).json({ message: error.message });
    }
}
// Delete Product

const deleteProduct =async (req,res)=>{
    const {id}=req.params
    try {
        const deletProduct=await Product.findByIdAndDelete(id)
        if (!deletProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
        res.status(200).json(deletProduct)
    } catch (error) {
        
    }

    /// Read All products with Advanced quering 

    // const getAllProduct= async (req,res)=>{

    //     try {
    //         const products=await Product.find(Query)
    //         .select({ __v: 0, _id: 0 ,category:0})
            
    //         ;
    //     } catch (error) {
            
    //     }

    // }
}
export  {createProduct , getProduct,updateProduct,deleteProduct}