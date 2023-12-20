const fs = require('fs');
// const index = fs.readFileSync("./index.html", "utf-8");
// const data = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
// const products = data.products;
// const mongoose = require('mongoose');
// const { Schema } = mongoose;
const model=require('../model/product');
// const { json } = require('express');
const Product=model.Product;


exports.getAllModels =async (req, res) => {
let products= await Product.find()
  res.json(products);
  console.log(products);
};

exports.getModel =async (req, res) => {
  let product= await Product.findOne({_id:req.params.id})
  console.log(product);
  res.send(product);
};

//   const body=req.body
// const product=new Product();
// product.title=req.body.title
// product.description=body.description
// product.price=body.price
// product.discountPercentage=body.discountPercentage
// product.rating=body.rating
// product.stock=body.stock
// product.brand=body.brand
// product.category=body.category
// product.thumbnail=body.thumbnail
// product.images=body.images
exports.createModel = (req, res) => {

const product=new Product(req.body);
console.log(req.body);
// product.title="note 20"
// product.description="lorem ipsum dotle"
// product.price=465
// product.discountPercentage=40
// product.rating=4
// product.stock=445
// product.brand="infinix"
// product.category="phone"
// product.thumbnail="jfhkd"
// product.images=["ajfhjfh"];

product.save(res.send("done"));



// product.create((err,doc)=>{
//   console.log({err,doc})
// //   if(err){
// // res.status(400).json(err)
// // }else{
// //     res.status(201).json(doc)

// //   }
// });
// product.create({
//   title: "Rhinestone Korean Style Open Rings",
//   description: "Fashion Jewellery 3Pcs Adjustable Pearl Rhinestone Korean Style Open Rings For Women",
//   price: 444,
//   discountPercentage: 40,
//   rating: 4.69,
//   stock: 9,
//   brand: "Fashion Jewellery",
//   category: "womens-jewellery",
//   thumbnail: "https://i.dummyjson.com/data/products/78/thumbnail.jpg"
 
// });
  
};
exports.replaceModel =async (req, res) => {
  
  const id = req.params.id;
try{
  let doc =await Product.findOneAndReplace({_id:id},req.body,{new:true});
  console.log(doc); 
  res.status(201).json(doc);
}
catch(err)
{
console.log(err)
res.status(400).json(err);
}

 
};

exports.updateModel =async (req, res) => {
  console.log(req.params.id);
  const id = req.params.id;

  try{
    let doc =await Product.findOneAndUpdate({_id:id},req.body,{new:true});
    console.log(doc); 
    res.status(201).json(doc);
  }
  catch(err)
  {
  console.log(err)
  res.status(400).json(err);
  }
  
};

exports.deleteModel =async (req, res) => {
  const id = req.params.id;
  try{
    let doc =await Product.findOneAndDelete({_id:id});
    console.log(doc + "deleted succesfully"); 
    res.status(201).json(doc);
  }
  catch(err)
  {
  console.log(err)
  res.status(400).json(err);
  }
  
};
