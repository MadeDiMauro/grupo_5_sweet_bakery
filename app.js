const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.resolve(__dirname, "./public");
const homePath = path.resolve(__dirname, "./views/home.html");

const PORT = process.env.PORT || 3000;
app.use(express.static(publicPath));

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

app.get("/", (req, res) => {
	res.sendFile(homePath);
});

app.get("/products", (req, res) => {
	res.sendFile(path.resolve(__dirname, "./views/products.html"));
});