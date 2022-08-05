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
    return Payments;
}