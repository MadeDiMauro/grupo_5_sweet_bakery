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

    const Order_state= sequelize.define (alias,cols, config);
    Order_state.associate= function (models) {
        Order_state.hasMany (models.Orders, {
            as: "Órdenes",
            foreignKey: "state_id"
        });
    }

    return Order_state;
}