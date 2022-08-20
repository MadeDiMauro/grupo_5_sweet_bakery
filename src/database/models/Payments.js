module.exports= (sequelize,dataTypes) => {
    let alias= "payments";  
    let cols= {
        id: {
            type: dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false,
        },
        type: {
            type: dataTypes.STRING
        }       
    };

    let config= {
            tableName: "payments",
            timestamps: false
    }

    const Payments= sequelize.define (alias,cols, config);

    Payments.associate= function (models) {
       Payments.belongsTo (models.orders, { 
        as:"orders",
        foreignKey:"payment_id"

    });
}
    return Payments;
}