const fs = require("fs");
const path = require("path");

const productosdbPath = path.join(__dirname, "../database/products.json");

const readJsonFile = (path) => {
    const data = fs.readFileSync(path, "utf-8");
    const dataParsed = JSON.parse(data);
    return dataParsed;
}

let productsList = readJsonFile(productosdbPath);

const cartController = {
    cart1: (req, res) => {
        let productsList = readJsonFile(productosdbPath);
        return res.render("cart/cart1", { productsList: productsList });
    },
    cart2: (req, res) => {
        return res.render('cart/cart2')
    },
    cart3: (req, res) => {
        return res.render('cart/cart3')
    },
}

module.exports = cartController;