module.exports= (sequelize,dataTypes) => {
    let alias= "products_categories";  
    let cols= {
        id: {
            type: dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false,
        },
        type: {
            type: dataTypes.STRING
        }
       
    };

    let config= {
            tableName: "products_categories",
            timestamps: false
    }

    const Products_categories= sequelize.define (alias,cols, config);

    Products_categories.associate= function (models) {
        Products_categories.hasMany (models.products, {
            as: "products",
            foreignKey: "category_id"
        });
    }
    return Products_categories;
}