module.exports= (sequelize,dataTypes) => {
    let alias= "orders";  
    let cols= {
        id: {
            type: dataTypes.INTEGER,
            primayKey:true,
            autoIncrement:true,
            allowNull:false
        },
        date: {
            type: dataTypes.DATEONLY,
        },
        
        state_id: {
            type: dataTypes.INTEGER
        },
        
        payment_id: {
            type: dataTypes.INTEGER
        },
        
        user_id: {
            type: dataTypes.INTEGER
        },
                     
        delivery_id: {
            type: dataTypes.INTEGER
        },
                    
       
    };

    let config= {
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: "deleted_at",
        paranoid: true
    }

    const Orders= sequelize.define (alias,cols, config);

    Orders.associate= function (models) {
        /*Orders.belongsToMany (models.Products, { //revisar
            as:"order_detail",
            through:"order_detail",
            foreignKey:"order_id",
            otherKey:"product_id",
            timestamps:false
        });*/

        Orders.hasMany(models.Order_detail, {
            as: "order_detail",
            foreignKey: "order_id"
        });

        Orders.belongsTo (models.Payments, { 
            as:"payments",
            foreignKey:"payment_id"

        });

        Orders.belongsTo (models.Users, {
            as:"users",
            foreignKey:"user_id"
        });
        
        Orders.belongsTo (models.Delivery, {
            as:"delivery",
            foreignKey:"delivery_id"
        });

        Orders.belongsTo (models.Order_state, {
            as:"order_state",
            foreignKey:"state_id"
        });
    
    }
    return Orders;
}