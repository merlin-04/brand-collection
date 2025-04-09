const mongoose = require('mongoose')

const brandSchema = new mongoose.Schema({
    brandname: {
        type: String,
        required: true,
        unique: true
    },
    categories: {
        type: [String],
        default: []
    },
    brandLogo: {
        type: String,
    }
})


const brands = mongoose.model("brands", brandSchema)

module.exports = brands