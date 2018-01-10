const express = require("express");

const app = express();

app.use(express.static(__dirname));

app.get("/api/contact", function(req, res) {
    res.json([
        {id:1, name: "Ori"},
        {id:2, name: "Roni"},
        {id:3, name: "Udi"},
        {id:4, name: "Carmit"},
        {id:5, name: "Tommy"},
    ]);
});

app.listen(3000, function() {
    console.log("Server is running");
});