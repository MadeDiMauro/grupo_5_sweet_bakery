module.exports= (sequelize,dataTypes) => {
    let alias= "delivery";  
    let cols= {
        id: {
            type: dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
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
            type:dataTypes.STRING,
        }
    };

    let config= {
            tableName: "delivery",
            timestamps: false
    }

    const Delivery= sequelize.define (alias,cols, config);
        Delivery.associate = function (models) {
        
            Delivery.belongsTo(models.orders, { 
                as:"orders",
                foreignKey:"delivery_id"
            });

            Delivery.belongsTo (models.delivery_type, { 
                as:"delivery_type",
                foreignKey:"type_id"
            });

    }

    return Delivery;
}