const fs= require ("fs");
const path=require ("path");

const productosLpPath=path.join (__dirname, "../Lp/productos.json");

const readJsonFile= (path)=> {
    const data=fs.readFileSync (path, "utf-8");
    const dataParsed=JSON.parse (data);
    return dataParsed;
}

const controller={
    products: (req,res)=>{
        const listaProductos=readJasonFile (productosLpPath);
        return res.render ("products", {listaProductos:listaProductos})
    },
    productDetail: (req,res)=> {
        return res.render ("productDetail", {listaProductos:listaProductos})
    }
}