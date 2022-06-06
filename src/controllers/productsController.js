const fs= require ("fs");
const path=require ("path");

const productsdbPath=path.join (__dirname, "../database/products.json");

const readJsonFile= (path)=> {
    const data=fs.readFileSync (path, "utf-8");
    const dataParsed=JSON.parse (data);
    return dataParsed;
}

const productsList=readJasonFile (productsdbPath);

const productsController = {

    products: (req,res)=>{
        return res.render ("products", {productsList:productsList})
    },
    productDetail: (req,res)=> {
        return res.render ('productDetail', {productsList:productsList}) // validacion y sin objeto completo
    },
    create: (req, res) => {
        return res.render ('create')
    },
    edit: (req, res) => {
        return res.render ('edit', {productsList:productsList}) //validacion y son objeto (en el ejs, entre llaves solo comparto el item filtrado, se filtra aantes del render)
    },

}

module.exports = productsController;