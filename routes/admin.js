const path = require('path')
const express = require('express')

const Router = express.Router() 

const products=[]
Router.get("/add-product",(req,res,next)=>{
    res.render('add-product',{ pageTitle:"Add Product",path:2})
});

Router.post("/add-product",(req,res,next)=>{
    products.push({title: req.body.title})
    res.redirect("/");
});
exports.routes=Router;
exports.products=products;