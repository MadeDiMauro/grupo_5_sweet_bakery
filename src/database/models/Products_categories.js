module.exports= (sequelize,dataTypes) => {
    let alias= "Categorías de Productos";  
    let cols= {
        id: {
        type: dataTypes.INTEGER,
        primayKey:true,
        autoIncrement:true,
        allowNull:false,
        },
        type: {
        type: dataTypes.STRING
        }
       
    };

    let config= {
        tableName:"Categorías de Productos",
        timestamps: false
    }

    const Products_categories= sequelize.define (alias,cols, config);
    Products_categories.associate= function (models) {
        Products_categories.hasMany (models.Products, {
            as: "Categorías de Productos",
            foreignKey: "product_id"
        });
    }
    return Products_categories;
}