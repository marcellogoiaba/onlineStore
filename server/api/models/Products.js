const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let productSchema = new Schema({
    itemName: {
        type: String, 
        required: true
    },
    description: {
        type: String, 
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    mainPhoto: {
        type: String,
        required: true
    },
    secondaryPhoto: {
        type: String
    }
})

const Product = mongoose.model('Product', productSchema);
module.exports = Product;