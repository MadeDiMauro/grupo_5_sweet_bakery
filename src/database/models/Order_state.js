module.exports= (sequelize,dataTypes) => {
    let alias= "Estado de Orden";  
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
        tableName:"Estado de Orden",
        timestamps: false
    }

    const Order_detail= sequelize.define (alias,cols, config);
    return Order_detail;
}