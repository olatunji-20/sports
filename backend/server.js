const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())


app.get("/", (req, res) => {
    res.send("BACKEND RUNNING!!!!!")
});

app.post("/", (req, res) => {
    try {
        console.log(req.body)
    }catch(err) {
        console.log(" hhhhhhhhh")
    }
})

app.listen(5000, () => {
    console.log("server running on port 5000.")
});