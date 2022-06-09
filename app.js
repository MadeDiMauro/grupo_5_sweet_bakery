const path = require("path");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

app.set ("view engine", "ejs");
app.set ("views", path.join (__dirname, "./views"));

app.use(express.static(path.join(__dirname, "public")));

const homePath = path.join(__dirname, "./views/home.html");
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
const headerhPath = path.join(__dirname, "./views/plantillas/header-home.html");
const footerhPath = path.join(__dirname, "./views/plantillas/footer-home.html");


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

app.get("/headerh", (req, res) => {
	res.sendFile(headerhPath);
});

app.get("/footerh", (req, res) => {
	res.sendFile(footerhPath);
});

// const routesProducts = require('./routes/products');
// const routesCart = require('./routes/cart');
// const routesUsers = require('./routes/users');
// const routesMain = require('./routes/main');

// app.use('/products', routesProducts);
// app.use('/cart', routesCart);
// app.use('/users', routesUsers);
// app.use('/', routesMain);

const adminProfile = path.join(__dirname, "./views/adminProfile.html");
const adminProducts = path.join(__dirname, "./views/adminProducts.html");
const adminCreate = path.join(__dirname, "./views/adminCreate.html");
const adminProductsList = path.join(__dirname, "./views/adminProductsList.html");
const adminProductEdit = path.join(__dirname, "./views/adminProductEdit.html");

app.get("/adminProfile", (req, res) => {
    res.sendFile(adminProfile);
});

app.get("/adminProducts", (req, res) => {
    res.sendFile(adminProducts);
});

app.get("/adminCreate", (req, res) => {
    res.sendFile(adminCreate);
});

app.get("/adminProductsList", (req, res) => {
    res.sendFile(adminProductsList);
});

app.get("/adminProductEdit", (req, res) => {
    res.sendFile(adminProductEdit);
});