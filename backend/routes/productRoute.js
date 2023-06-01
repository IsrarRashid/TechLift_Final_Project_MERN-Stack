import express from "express";

const router = express.Router();
import {
  addProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  GetSingleProduct,
} from "../controllers/productController.js";

// route for adding a new Product
router.post("/add", addProduct);

// router for get single product
router.get("/get-single-product/:id", GetSingleProduct);

// router for getting all products
router.get("/show-all", getAllProducts);

// route for updating a product
router.post("/update/:id", updateProduct);

// route for deleting a product
router.delete("/delete/:id", deleteProduct);

export default router;
