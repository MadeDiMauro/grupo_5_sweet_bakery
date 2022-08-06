module.exports= (sequelize,dataTypes) => {
    let alias= "Entregas";  
    let cols= {
        id: {
            type: dataTypes.INTEGER,
            primayKey:true,
            autoIncrement:true,
            allowNull:false,
        },
        
        type_id: {
            type: dataTypes.INTEGER
        },  
        adress: {
            type: dataTypes.STRING,
        },
        location:{
            type: dataTypes.STRING,
        },
        comments: {
            type:dataTypes.TEXT,
        }
    };

    let config= {
            tableName:"Entregas",
            timestamps: false
    }

    const Delivery= sequelize.define (alias,cols, config);
    Delivery.associate= function (models) {
        Delivery.belongsTo (models.Orders, { 
        as:"Órdenes",
        foreignKey:"delivery_id"

    });
    Delivery.belongsTo (models.Delivery_type, { 
        as:"Tipo de Entrega",
        foreignKey:"type_id"

        
    });

}

    return Delivery;
}