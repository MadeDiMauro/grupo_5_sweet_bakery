const fs = require('fs');
const path = require('path');
 /* const db= require ('../database/models')*/                                                                                                         

const productsdbPath = path.join(__dirname, '../database/products.json');

const readJsonFile = (path) => {
    const data = fs.readFileSync(path, { encoding: 'utf-8' });
    const dataParsed = JSON.parse(data);
    return dataParsed;
}

const productsList = readJsonFile(productsdbPath);

const adminController = {
    principal: (req, res) => {
        return res.render('users/admin/principal');
    },
    // profile: (req, res) => {
    //     res.render('users/admin/profile');
    // },
    createUser: (req, res) => {
        res.render('users/admin/adminCreate');
    },
    editUser: (req, res) => {
        res.render('users/admin/adminEdit');
    },
    list: (req, res) => {
        const productsList = readJsonFile(productsdbPath);
        res.render('users/admin/adminProducts', { productsList });
    },
    createProduct: (req, res) => {
        return res.render('users/admin/adminCreate');
    },
    store: (req, res) => {
        const products = readJsonFile(productsdbPath)
        const product = {
            id: products[products.length - 1].id + 1,
            name: req.body.name,
            price: req.body.price,
            category: req.body.category,
            description: req.body.description,
            image: req.file ? req.file.filename : "logo-sweet-bakery-dorado.png"
        }

        products.push(product);
        fs.writeFileSync(productsdbPath, JSON.stringify(products, null, 2));
        return res.redirect("/admin/products")
    },
    editProduct: (req, res) => {
        const products = readJsonFile(productsdbPath);
        let product = products.find((item) => item.id == req.params.id);
        return res.render('users/admin/adminEdit', { product }) //validacion y son objeto (en el ejs, entre llaves solo comparto el item filtrado, se filtra aantes del render)
    },
    update: (req, res) => {
        const products = readJsonFile(productsdbPath)
        for (let i = 0; i < products.length; i++) {
            if (products[i].id == req.params.id) {
                products[i] = {
                    id: products[i].id,
                    name: req.body.name,
                    price: req.body.price,
                    description: req.body.description,
                    image: req.file ? req.file.filename : products[i].image,
                    category: req.body.category
                }
            }
        };
        fs.writeFileSync(productsdbPath, JSON.stringify(products, null, 2));
        return res.redirect("/admin/products");
    },
    destroy : (req, res) => {
		const products = readJsonFile(productsdbPath);
		const productsUpdate = products.filter(product => product.id != req.params.id);

		fs.writeFileSync(productsdbPath, JSON.stringify(productsUpdate, null, 2));
		return res.redirect("/admin/products");
	}
}

module.exports = adminController;