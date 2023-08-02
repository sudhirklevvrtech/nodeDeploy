const express = require('express');
const productController = require('../controller/product');



const router =  express.Router();


router
.post('/products', productController.createProduct )  //add new product
.get('/products', productController.getAllProducts) // get all the products
.get('/products/:id', productController.getProduct)  // get signle product
.put('/products/:id', productController.replaceProduct) // edit product
.patch('/products/:id', productController.updateProduct) // update product
.delete('/products/:id', productController.deleteProduct) // delete product


exports.routes = router;