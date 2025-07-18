import Product from "../models/Productmodel.js";

// Create Prodcut                               Marked Works
const createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(200).json(newProduct);
  } catch (error) {
    console.error("Error creating Product:", error);
    res.status(400).json({ message: error.message });
  }
};
// Get Productby id                             Marked Works
const getProductbyid = async (req, res) => {
  const { id } = req.params;
  try {
    const prodcut = await Product.findById(id);
    res.status(200).json(prodcut);
  } catch (error) {
    console.error("Error getiing Product :", error);
    res.status(400).json({ message: error.message });
  }
};

//Update Product                                     Marked Works
const updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const updateProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updateProduct);
  } catch (error) {
    console.error("Error Updating Product :", error);
    res.status(400).json({ message: error.message });
  }
};
// Delete Product                             Marked Works

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const deletProduct = await Product.findByIdAndDelete(id);
    if (!deletProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(deletProduct);
  } catch (error) {}
};

// Read All products with Advanced quering

const getProduct = async (req, res) => {
  const { category, sortBy, maxPrice, minPrice } = req.query;

  let { page, limit } = req.query;

  const query = {};
  const sort = {};


  //Sort Category                            Marked Works
  if (category) {
    query.category = { $eq: category };
  }

// sorting asc                                Marked Works
  if (sortBy) {
     const [field, order] = sortBy.split("_");
  sort[field] = order === "asc" ? 1 : -1;
  }

  console.log("QERY OBJ:", query);
  console.log("SORT OBJ:", sort);
  console.log(" CATEG OBJ:", category);
   // Pagination defaults                       Marked Works          
  if (!page) {
    page = 1;
  }
  if (!limit) {
    limit = 10;
  }

// MaxPrice and miniPrice                    Marked Works
  if (maxPrice || minPrice) {
    query.price = {}
    if (maxPrice) {
      query.price.$lt = maxPrice;
    }
    if (minPrice) {
      query.price.$gt = minPrice;
    }
  }
  
  try {
    const products = await Product.find(query)
      .select({ __v: 0, _id: 0, category: 0 })
      .sort(sort)
      .skip((page - 1) * limit)
      .limit(limit);
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: error.message });
  }
};

export {
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  getProductbyid,
};
