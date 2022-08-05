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
    return Products_categories;
}