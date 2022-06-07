const fs= require ("fs");
const path=require ("path");

const productosdbPath=path.join (__dirname, "../database/productos.json");

const readJsonFile= (path)=> {
    const data=fs.readFileSync (path, "utf-8");
    const dataParsed=JSON.parse (data);
    return dataParsed;
}

let productsList = readJsonFile(productosdbPath); 

const cartController = {
    cart1: (req,res) => {
      return res.render("cart1", { listaProductos: productsList });  
    },
    cart2: (req, res) => {
        return res.render('cart2')
    },
    cart3: (req, res) => {
        return res.render('cart3')
    },

}

module.exports = cartController;