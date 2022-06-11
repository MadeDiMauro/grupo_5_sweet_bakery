const fs = require('fs');
const path = require('path');

const productsdbPath = path.join(__dirname, '../database/productos.json');

const readJsonFile = (path) => {
    const data = fs.readFileSync(path, {encoding:'utf-8'});
    const dataParsed = JSON.parse(data);
    return dataParsed;
}

const productsList = readJsonFile(productsdbPath);

const adminController = {
    adminPage: (req, res) => {
        res, render('users/admin/adminProducts');
    },
    editList: (req, res) => {
        res.render('users/admin/adminProductsList', { productsList });
    },
    create: (req, res) => {
        res.render('users/admin/adminCreate');
    }
}

module.exports = adminController;