const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Product');

// schema for products
let products_schema = mongoose.Schema({
  product_id: Number,
  style_id: Number,
  name: String,
  slogan: String,
  description: String,
  category: String,
  deafult_price: String,
  original_price: String,
  sale_price: String,
  features: String,
  photos: String,
  url: String,
  thumbnail_url: String
});

let Product = mongoose.model('Product', products_schema);