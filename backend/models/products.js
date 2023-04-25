const mongoose = require("mongoose");
const Schema = require("Schema");

const productSchema = new mongoose.Schema({
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
});

