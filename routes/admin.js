const path = require('path')
const express = require('express')

const productsController = require('../controllers/products')

const Router = express.Router() 

const products=[]
Router.get("/add-product", productsController.getAddProduct);

Router.post("/add-product",productsController.postAddProducts);

module.exports=Router;