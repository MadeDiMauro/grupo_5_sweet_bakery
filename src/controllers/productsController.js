const fs= require ("fs");
const path=require ("path");

const productosdbPath=path.join (__dirname, "../database/productos.json");

const readJsonFile= (path)=> {
    const data=fs.readFileSync (path, "utf-8");
    const dataParsed=JSON.parse (data);
    return dataParsed;
}

const listaProductos=readJasonFile (productosdbPath);

const productsController = {

    products: (req,res)=>{
        return res.render ("products", {listaProductos:listaProductos})
    },
    productDetail: (req,res)=> {
        return res.render ('productDetail', {listaProductos:listaProductos}) // validacion y sin objeto completo
    },
    create: (req, res) => {
        return res.render ('create')
    },
    edit: (req, res) => {
        return res.render ('edit', {listaProductos:listaProductos}) //validacion y son objeto (en el ejs, entre llaves solo comparto el item filtrado, se filtra aantes del render)
    },

}

module.exports = productsController;