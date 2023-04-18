const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("BACKEND RUNNING!!!!!")
});

app.post("/", (req, res) => {
    console.log(formData)
})

app.listen(5000, () => {
    console.log("server running on port 5000.")
});