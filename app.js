require('dotenv').config();
const express=require('express')
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');



//db connection
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
console.log("db connected")
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

//Schema
// const blogSchema = new Schema({
//   title: {type:String ,required:[true,"Title is Required"]}, 
//     description: {type:String ,required:[true,"Title is Required"]},
//     price: {type:Number ,min:[99,'Minimum price of product must be 99'],required:[true,"Title is Required"]},
//     discountPercentage: {type:Number ,min:[0,'Minimum discount of product must be 0'],required:[true,"discount is Required"], max:[50,'Maximum price of discount must be under 50']},
//     rating: {type:Number ,min:[0,'Minimum rating of product must be 0'],required:[true,"rating is Required"], max:[5,'Maximum rating of product must be under 5']},
//     stock: Number,
//     brand: {type:String ,required:[true,"Brand is Required"]},
//     category: {type:String ,required:[true,"Category is Required"]},
//     thumbnail: {type:String ,required:[true,"Thumbnail is Required"]},
//     images: [String]
      
// })


const index = fs.readFileSync("./index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
const products = data.products;
const productController=require('./controller/product');
const productRouter = require('./routes/product')
const userRouter = require('./routes/user')
// const productRouter=express.Router();
// username:harisnaseer258
// pass:2BE4b1kdbXhIZwX0
const server=express();
server.use(cors())
server.use(express.json())
// console.log(process.env.DB_PASS)
//MVC Folder structure to organize and simplify the code

//MIDDLEWARES
server.use(express.static(path.resolve(process.env.PUBLIC_DIR)));

server.use('/products',productRouter.router)
server.use('/users',userRouter.router)
server.use('*',(req,res)=>{
res.sendFile(path.resolve(__dirname,'build','index.html'))
})
//third party middleware : morgan
server.use(morgan("dev"))
// server.use(morgan("default"))

//body parser



//API - ENDPOINT -ROUTE
//API -root - base URL example: google/api/v2







server.listen(process.env.PORT,()=>{
  console.log("server started")
});
