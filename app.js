const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.join(__dirname, "./public");
const homePath = path.join(__dirname, "./views/products.html");
const productPath = path.join(__dirname, "./views/products.html");
const productDetailPath = path.join(__dirname, "./views/productDetail.html");
const PORT = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

app.get("/", (req, res) => {
res.sendFile(homePath);
});

app.get("/products", (req, res) => {
res.sendFile(productPath);
});

app.get("/productDetail", (req, res) => {
    res.sendFile(productDetailPath);
});
