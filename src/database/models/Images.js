module.exports= (sequelize,dataTypes) => {
    let alias= "images";  
    let cols= {
        id: {
            type: dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false,
        },
       url: {
            type: dataTypes.STRING
        },
        product_id: {
            type: dataTypes.INTEGER
        }
    };

    let config= {
            timestamps: false
    }

    const Images = sequelize.define (alias,cols, config);

    Images.associate = function (models) {
        Images.belongsTo (models.products, {
            as: "products",
            foreignKey: "product_id"
        });
    }
    return Images;
}