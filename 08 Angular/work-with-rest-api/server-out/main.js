"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get("/api/family", function (req, res) {
    res.json([
        { "id": 1, "name": "Ori" },
        { "id": 2, "name": "Roni" },
    ]);
});
app.get("/api/friends", function (req, res) {
    res.json([
        { "id": 3, "name": "Udi" },
        { "id": 4, "name": "Tommy" },
    ]);
});
app.listen(3000, function () {
    console.log("Server is running xxx");
});
//# sourceMappingURL=main.js.map