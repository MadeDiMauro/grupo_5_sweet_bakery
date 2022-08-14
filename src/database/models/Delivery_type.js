module.exports= (sequelize,dataTypes) => {
    let alias= "Tipo de Entrega";  
    let cols= {
        id: {
            type: dataTypes.INTEGER,
            primayKey:true,
            autoIncrement:true,
            allowNull:false,
        },

        type: {
            type: dataTypes.STRING
        },

    };

    let config= {
            tableName:"Tipo de Entrega",
            timestamps: false
    }

    const Delivery_type= sequelize.define (alias,cols, config);

    Delivery_type.associate= function (models) {
        Delivery_type.hasMany (models.Delivery, {
            as: "Entregas",
            foreignKey: "type_id"
        });
    }
    
    return Delivery_type;
}