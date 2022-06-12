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
        res.render('users/admin/adminPrincipal');
    },
    // profile: (req, res) => {
    //     res.render('users/admin/profile');
    // },
    list: (req, res) => {
        res.render('users/admin/adminProducts', { productsList });
    },
    edit: (req, res) => {
        res.render('users/admin/adminEdit');
    },
    create: (req, res) => {
        res.render('users/admin/adminCreate');
    }
}

module.exports = adminController;