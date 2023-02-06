const express = require("express");
const app = express();

const port = process.env.PORT || 4000;

app.get("/", function (req, res) {
    res.send("Olá, Dev!");
});

app.listen(port, () => {
    console.info("Aplicação rodando em http://localhost:4000")
})