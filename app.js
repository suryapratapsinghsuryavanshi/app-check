const express = require("express");
const app = express();
const host = process.env.CODESPACES_HOST;

app.get("/", (req, res) => {
    res.json({
        msg: "Hello, Suryapratap!"
    });
});

app.listen(8080, () => {
    console.log("Server: http://localhost:8080/");
});
