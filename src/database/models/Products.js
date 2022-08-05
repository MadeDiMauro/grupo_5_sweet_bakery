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
        type: dataTypes.INTEGER,
        },
        category: {
        type:dataTypes.INTEGER,
        }
    };

    let config= {
        tableName:"Usuarios",
        timestamps: false
    }

    const Products= sequelize.define (alias,cols, config);
    return Products;
}