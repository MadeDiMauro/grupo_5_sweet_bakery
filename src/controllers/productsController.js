const fs = require("fs");
const path = require("path");

const productsdbPath = path.join(__dirname, "../database/products.json");

const readJsonFile = (path) => {
    const data = fs.readFileSync(path, "utf-8");
    const dataParsed = JSON.parse(data);
    return dataParsed;
}

const productsList = readJsonFile(productsdbPath);

const productsController = {
    list: (req, res) => {
        const productsList = readJsonFile(productsdbPath);
        if (req.params.category) {
            let productsListCategory = productsList.filter(
                (item) => item.category == req.params.category
            );
            //return res.json(productsList);
            console.log(productsListCategory);
            return res.render("products/products", { productsList: productsListCategory });
        } else {
            return res.render("products/products", { productsList: productsList });
        }
    },
    detail: (req, res) => {
        let productItem = productsList.find(item => item.id == req.params.id);
        let productsRelated = productsList.filter(item => item.category == productItem.category);
        return res.render('products/productDetail', { productItem: productItem, productsRelated: productsRelated }) // validacion y sin objeto completo
    }
}

module.exports = productsController;