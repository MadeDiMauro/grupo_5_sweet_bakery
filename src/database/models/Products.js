module.exports= (sequelize,dataTypes) => {
    let alias= "Productos";  
    let cols= {
        id: {
            type: dataTypes.INTEGER,
            primayKey:true,
            autoIncrement:true,
            allowNull:false,
        },
        name: {
            type: dataTypes.STRING,
        },
        price:{
            type: dataTypes.DECIMAL,
        },
        description: {
            type:dataTypes.TEXT,
        },
        image: {
            type: dataTypes.STRING, //no falta imagenes en el diagrama, en productos??
        },
        category_id: {
            type: dataTypes.INTEGER
        },
        
    };

    let config= {
            tableName:"Usuarios",
            timestamps: false
    }

    const Products= sequelize.define (alias,cols, config);
    Products.associate= function (models) {
        Products.hasMany (models.Images, {
            as: "Imágenes",
            foreignKey: "product_id"
        });
    }
        Products.belongsTo (models.Products_categories, { //tengo dudas sobre este!!
            as:"Categorías de Productos",
            foreignKey:"product_id"

        });

        Products.belongsToMany (models.Orders, {
            as:"Órdenes",
            through:"Order_detail",
            foreignKey:"product_id",
            otherKey:"order_id",
            timestamps:false
        });



    return Products;
}