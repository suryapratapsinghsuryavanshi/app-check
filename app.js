const express = require("express");
const app = express();
const host = process.env.CODESPACES_HOST;

app.get("/", (req, res) => {
    res.json({
        msg: "Hello, World(v1.0.0)!"
    });
});

app.listen(8080, () => {
    console.log("Server: http://localhost:8080/");
});
