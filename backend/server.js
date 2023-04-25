const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const upload = require("express-fileupload")

const app = express();

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(upload());


app.get("/", (req, res) => {
    res.send("BACKEND RUNNING!!!!!")
});

app.post("/", (req, res) => {
    try {
        console.log(req.body)
        console.log(req.files.picture.name)

        const productImage = req.files.picture;
        
        const productName = req.body.productName;
        const maker = req.body.maker;
        const productPrice = req.body.productPrice;
        const discount = req.body.discount;
        const series = req.body.series;

        console.log(productImage.name + " " + productName + " " + maker + " " + productPrice + " " + discount + " " + series);

    }catch(err) {
        console.log(err)
    }
})

app.listen(5000, () => {
    console.log("server running on port 5000.")
});