const express=require('express')
const router=express.Router();
const productController=require('../controller/product');

//Read get /products

router
.get("/",productController.getAllModels)
//Read get /products/:id
.get("/:id",productController.getModel)
//Create Post /products
.post("/",productController.createModel)
//Update Put /products/:id Put poora data over write krt deta ha
.put("/:id",productController.replaceModel)
//Update Patch /products/:id Patch srf changed data ko update kre ga
.patch("/:id",productController.updateModel)
//DELETE delete /products/:id just delete the id
.delete("/:id",productController.deleteModel)

exports.router= router;