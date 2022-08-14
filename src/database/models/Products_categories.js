module.exports= (sequelize,dataTypes) => {
    let alias= "products_categories";  
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
            timestamps: false
    }

    const Products_categories= sequelize.define (alias,cols, config);

    Products_categories.associate= function (models) {
        Products_categories.hasMany (models.Products, {
            as: "products",
            foreignKey: "category_id"
        });
    }
    return Products_categories;
}