module.exports= (sequelize,dataTypes) => {
    let alias= "payments";  
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

    const Payments= sequelize.define (alias,cols, config);

    Payments.associate= function (models) {
       Payments.belongsTo (models.Orders, { 
        as:"orders",
        foreignKey:"payment_id"

    });
}
    return Payments;
}