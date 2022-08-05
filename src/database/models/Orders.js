module.exports= (sequelize,dataTypes) => {
    let alias= "Órdenes";  
    let cols= {
        id: {
        type: dataTypes.INTEGER,
        primayKey:true,
        autoIncrement:true,
        allowNull:false,
        },
        date: {
        type: dataTypes.DATEONLY,
        }
       
    };

    let config= {
        tableName:"Órdenes",
        timestamps: false
    }

    const Orders= sequelize.define (alias,cols, config);
    return Orders;
}