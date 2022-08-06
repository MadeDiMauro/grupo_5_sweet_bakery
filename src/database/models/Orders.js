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
    Orders.associate= function (models) {
        Orders.belongsToMany (models.Products, { //revisar
            as:"Productos",
            through:"Order_detail",
            foreignKey:"category_id",
            otherKey:"order_id",
            timestamps:false
        });
    }
        Orders.belongsTo (models.Payments, { 
            as:"Formas de Pago",
            foreignKey:"payment_id"

        });

        Orders.belongsTo (models.Users, {
            as:"Usuarios",
            foreignKey:"user_id"

        });
        
        Orders.belongsTo (models.Delivery, {
            as:"Entregas",
            foreignKey:"delivery_id"

        });

        Orders.belongsTo (models.Order_state, {
            as:"Estado de Entregas",
            foreignKey:"state_id"

        });
    

    return Orders;
}