module.exports= (sequelize,dataTypes) => {
    let alias= "products";  
    let cols= {
        id: {
            type: dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false,
        },
        name: {
            type: dataTypes.STRING,
        },
        price:{
            type: dataTypes.DECIMAL,
        },
        description: {
            type:dataTypes.STRING,
        },
        category_id: {
            type: dataTypes.INTEGER
        },
        
    };

    let config= {
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: "deleted_at",
        paranoid: true
    }

    const Products= sequelize.define (alias,cols, config);

    Products.associate= function (models) {

        Products.hasMany (models.images, {
            as: "images",
            foreignKey: "product_id"
        });
    
        Products.belongsTo (models.products_categories, {
            as:"products_categories",
            foreignKey:"category_id"

        });

        /*
        Products.belongsToMany (models.Orders, {
            as:"Órdenes",
            through:"Order_detail",
            foreignKey:"product_id",
            otherKey:"order_id",
            timestamps:false
        });
        */
        Products.hasMany(models.order_detail, {
            as: "order_detail",
            foreignKey: "product_id"
        });

    }
    return Products;
}