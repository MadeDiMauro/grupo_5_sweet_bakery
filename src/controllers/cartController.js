const fs= require ("fs");
const path=require ("path");

const productosLpPath=path.join (__dirname, "../Lp/productos.json");

const readJsonFile= (path)=> {
    const data=fs.readFileSync (path, "utf-8");
    const dataParsed=JSON.parse (data);
    return dataParsed;
}

const cartController = {
    cart1: (req,res) => {
      return res.render('cart1', {listaProductos:listaProductos})  
    },
    cart2: (req, res) => {
        return res.render('cart2')
    },
    cart3: (req, res) => {
        return res.render('cart3')
    },

}

module.exports = cartController;