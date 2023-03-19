import express from "express";
import "express-async-errors";
import morgan from "morgan";
var app = express();
var port = process.env.port || 3000;
app.use(express.json());
app.get("/", function (req, res) {
    res.json({ msg: "message" });
});
app.listen(port, function () { return console.log("example on port ".concat(port)); });
var planets = [
    {
        id: 1,
        name: "Earth"
    },
    {
        id: 2,
        name: "Mars"
    },
];
