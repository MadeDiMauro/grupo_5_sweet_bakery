module.exports= (sequelize,dataTypes) => {
    let alias= "Imágenes";  
    let cols= {
        id: {
            type: dataTypes.INTEGER,
            primayKey:true,
            autoIncrement:true,
            allowNull:false,
        },
       url: {
            type: dataTypes.STRING
        },
        product_id: {
            type: dataTypes.INTEGER
        },
            
      
    };

    let config= {
            tableName:"Imágenes",
            timestamps: false
    }

    const Images= sequelize.define (alias,cols, config);

    Images.associate= function (models) {
        Images.belongsTo (models.Products, {
            as: "Productos",
            foreignKey: "product_id"
        });
    }
    return Images;
}