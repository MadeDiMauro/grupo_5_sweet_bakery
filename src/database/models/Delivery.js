module.exports= (sequelize,dataTypes) => {
    let alias= "delivery";  
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
            type:dataTypes.STRING,
        }
    };

    let config= {
            timestamps: false
    }

    const Delivery= sequelize.define (alias,cols, config);
        Delivery.associate= function (models) {
            Delivery.belongsTo (models.Orders, { 
            as:"orders",
            foreignKey:"delivery_id"
        });

        Delivery.belongsTo (models.Delivery_type, { 
            as:"delivery_type",
            foreignKey:"type_id"
        });

    }

    return Delivery;
}