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
        
        const submittedFile = req.files.picture;

        const productImageName = submittedFile.name;
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
            imageName: productImageName
        });

        product.save();

        submittedFile.mv("./product-images/" + productName + productImageName, (err) => {
            if(err) {
                console.log("FILE COULD NOT BE UPLOADED" + err);
            }else {
                console.log("FILE SUCCESSFULLY UPLOADED");
            }
        } )

    } catch (err) {
        console.log(err)
    }
});

app.get("/all-products", (req, res) => {
    Product.find().then((result) => {
        console.log("ALL PRODUCTS " + result)
        res.send(result)
    }).catch((err) => {
        console.log("ERROR " + err)
    })
})




app.listen(5000, () => {
    console.log("server running on port 5000.")
});