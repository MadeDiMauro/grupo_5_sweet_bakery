module.exports= (sequelize,dataTypes) => {
    let alias= "Detalle de Orden";  
    let cols= {
        id: {
            type: dataTypes.INTEGER,
            primayKey:true,
            autoIncrement:true,
            allowNull:false,
        },
        quantity: {
            type: dataTypes.DECIMAL
        },
        product_id: {
            type: dataTypes.INTEGER
        },
        order_id: {
            type: dataTypes.INTEGER
        },
            
       
    };

    let config= {
            tableName:"Detalle de Orden",
            timestamps: false
    }

    const Order_detail= sequelize.define (alias,cols, config);  //tengo que crear esta tabla?? porque supuestamente es una intermedia pero tiene quantity
    return Order_detail;
}