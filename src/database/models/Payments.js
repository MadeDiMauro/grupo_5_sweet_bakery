module.exports= (sequelize,dataTypes) => {
    let alias= "Formas de Pago";  
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
        condition: {
        type: dataTypes.STRING
        }
       
    };

    let config= {
        tableName:"Formas de Pago",
        timestamps: false
    }

    const Payments= sequelize.define (alias,cols, config);

    Payments.associate= function (models) {
       Payments.belongsTo (models.Orders, { 
        as:"Órdenes",
        foreignKey:"payment_id"

    });
}
    return Payments;
}