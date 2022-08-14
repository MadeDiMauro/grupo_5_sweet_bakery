module.exports= (sequelize,dataTypes) => {
    let alias= "order_state";  
    let cols= {
        id: {
            type: dataTypes.INTEGER,
            primayKey:true,
            autoIncrement:true,
            allowNull:false
        },
        type: {
            type: dataTypes.STRING
        }
       
    };

    let config= {
            timestamps: false
    }

    const Order_state= sequelize.define (alias,cols, config);
    
    Order_state.associate= function (models) {
        Order_state.hasMany (models.Orders, {
            as: "orders",
            foreignKey: "state_id"
        });
    }

    return Order_state;
}