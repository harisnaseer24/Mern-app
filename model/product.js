const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    title: {type:String ,required:[true,"Title is Required"]}, 
      description: {type:String },
      price: {type:Number ,min:[99,'Minimum price of product must be 99'],required:[true,"Title is Required"]},
      discountPercentage: {type:Number ,min:[0,'Minimum discount of product must be 0'],required:[true,"discount is Required"], max:[50,'Maximum price of discount must be under 50']},
      rating: {type:Number ,min:[0,'Minimum rating of product must be 0'], max:[5,'Maximum rating of product must be under 5'], default:0},
      stock: {type:Number ,min:[0,'Minimum stock of product must be 0']},
      brand: {type:String ,required:[true,"Brand is Required"]},
      category: {type:String ,required:[true,"Category is Required"]},
      thumbnail: {type:String ,required:[true,"Thumbnail is Required"]},
      images: [String]
        
  })

  exports.Product=mongoose.model('Product', productSchema);

