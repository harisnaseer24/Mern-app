const express=require('express')
const router=express.Router();
const userController=require('../controller/user');

//Read get /products
router
.get("/",userController.getAllModels)
//Read get /products/:id
.get("/:id",userController.getModel)
//Create Post /products
.post("/",userController.createModel)
//Update Put /products/:id Put poora data over write krt deta ha
.put("/:id",userController.replaceModel)
//Update Patch /products/:id Patch srf changed data ko update kre ga
.patch("/:id",userController.updateModel)
//DELETE delete /products/:id just delete the id
.delete("/:id",userController.deleteModel)

exports.router= router;