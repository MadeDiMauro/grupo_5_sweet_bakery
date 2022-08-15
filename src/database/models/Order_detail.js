module.exports= (sequelize,dataTypes) => {
    let alias= "order_detail";  
    let cols= {
        id: {
            type: dataTypes.INTEGER,
            primaryKey:true,
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
            timestamps: false
    }

    const Order_detail= sequelize.define (alias,cols, config); 

       
    Order_detail.associate= function (models) {
        Order_detail.belongsTo (models.orders, {
            as: "orders",
            foreignKey: "order_id"
        });
        Order_detail.belongsTo (models.products, {
            as: "products",
            foreignKey: "product_id"
        });
    }

    return Order_detail;
}