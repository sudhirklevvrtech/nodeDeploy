const mongoose = require('mongoose');
const { Schema } = mongoose;

// schema
const productsSchema = new Schema({
    title: {type : String, required: true}, 
    description: {type : String, required: true}, 
    price: {type:Number, min:[0, 'Price Should be more than 0'], required: true},
    discountPercentage : Number,
    rating : {type:Number, min:[0, 'Rating should be more than 0'], max:[5, 'Rating shoul dbe less than 5']},
    brand: {type : String, required: true}, 
    category : {type : String, required: true}, 
    thumbnail: {type : String, required: true}, 
    images : [String]
  });

 exports.Product = mongoose.model('Product', productsSchema);