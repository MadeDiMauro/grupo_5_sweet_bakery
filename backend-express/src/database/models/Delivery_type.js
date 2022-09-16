module.exports= (sequelize,dataTypes) => {
    let alias= "delivery_type";  
    let cols= {
        id: {
            type: dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },

        type: {
            type: dataTypes.STRING
        }

    };

    let config= {
            tableName: "delivery_type",
            timestamps: false
    }

    const Delivery_type= sequelize.define (alias,cols, config);

    Delivery_type.associate= function (models) {
        Delivery_type.hasMany (models.delivery, {
            as: "delivery",
            foreignKey: "type_id"
        });
    }
    
    return Delivery_type;
}