const fs = require('fs');
const path = require('path');

const productsdbPath = path.join(__dirname, '../database/productos.json');

const readJsonFile = (path) => {
    const data = fs.readFileSync(path, { encoding: 'utf-8' });
    const dataParsed = JSON.parse(data);
    return dataParsed;
}

const productsList = readJsonFile(productsdbPath);

const adminController = {
    principal: (req, res) => {
        res.render('users/admin/principal');
    },
    // profile: (req, res) => {
    //     res.render('users/admin/profile');
    // },
    list: (req, res) => {
        res.render('users/admin/products', { productsList });
    },
    edit: (req, res) => {
        res.render('users/admin/editProduct');
    },
    create: (req, res) => {
        res.render('users/admin/createProduct');
    }
}

module.exports = adminController;