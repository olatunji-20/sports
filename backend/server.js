const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const upload = require("express-fileupload");
const mongoose = require('mongoose');
const Product = require('./models/products');

const app = express();

const dbURI = "mongodb+srv://sheriffdeen:sheriff1234@tunji.ce8aj.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log("CONNECTED TO DB"))
        .catch((err) => console.log(err))

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(upload());


app.get("/", (req, res) => {
    res.send("BACKEND RUNNING!!!!!");
    console.log("BACKEND RUNNING");
});

app.post("/", (req, res) => {
    try {
        console.log(req.body)
        console.log(req.files.picture.name)

        const productImage = req.files.picture.name;
        const productName = req.body.productName;
        const maker = req.body.maker;
        const productPrice = req.body.productPrice;
        const discount = req.body.discount;
        const series = req.body.series;

        const product = new Product({
            productName: productName,
            maker: maker,
            productPrice: productPrice,
            discount: discount,
            series: series,
            imageName: productImage
        });

        product.save();

    } catch (err) {
        console.log(err)
    }
});

app.listen(5000, () => {
    console.log("server running on port 5000.")
});