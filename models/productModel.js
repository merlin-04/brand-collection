const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
        trim: true
      },
      description: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true,
        min: 0
      },
      category: {
        type: String,
        required: true
      },
      brand: {
        type: String, 
        required: true
      },
      productImage: {
        type: String 
      },
      addedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
      }
})


const products = mongoose.model("products", productSchema)

module.exports = products