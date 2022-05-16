const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.join(__dirname, "./public");
const homePath = path.join(__dirname, "./views/products.html");
const productPath = path.join(__dirname, "./views/products.html");
const productDetailPath = path.join(__dirname, "./views/productDetail.html");
const registerPath = path.join(__dirname, "./views/register.html");
const loginPath = path.join(__dirname, "./views/login.html");
const cart1Path = path.join(__dirname, "./views/cart1.html");
const cart2Path = path.join(__dirname, "./views/cart2.html");
const cart3Path = path.join(__dirname, "./views/cart3.html");

const basePath = path.join(__dirname, "./views/plantillas/base.html");
const headerPath = path.join(__dirname, "./views/plantillas/header.html");
const footerPath = path.join(__dirname, "./views/plantillas/footer.html");

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

app.get("/register", (req, res) => {
    res.sendFile(registerPath);
});

app.get("/login", (req, res) => {
    res.sendFile(loginPath);
});

app.get("/cart1", (req, res) => {
    res.sendFile(cart1Path);
});

app.get("/cart2", (req, res) => {
    res.sendFile(cart2Path);
});

app.get("/cart3", (req, res) => {
    res.sendFile(cart3Path);
});

app.get("/base", (req, res) => {
    res.sendFile(basePath)
})

app.get("/header", (req, res) => {
	res.sendFile(headerPath);
});

app.get("/footer", (req, res) => {
	res.sendFile(footerPath);
});