const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    maker: {
        type: String,
        required: true
    },
    productPrice: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    series: {
        type: String
    },
    imageName: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);
module.exports = Product;