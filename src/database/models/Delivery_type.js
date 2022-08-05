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
            }
    };

    let config= {
        tableName:"Tipo de Entrega",
        timestamps: false
    }

    const Delivery_type= sequelize.define (alias,cols, config);
    return Delivery_type;
}