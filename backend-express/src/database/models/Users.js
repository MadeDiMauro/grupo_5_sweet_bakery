module.exports= (sequelize,dataTypes) => {
    let alias= "user";  
    let cols= {
        id: {
            type: dataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        name: {
            type: dataTypes.STRING,
        },
        email: {
            type: dataTypes.STRING,
        },
        phone: {
            type: dataTypes.INTEGER,
        },
        password: {
            type: dataTypes.STRING,
        },
        re_password: {
            type: dataTypes.STRING,
        },
        category_id: {
            type: dataTypes.INTEGER,
        },
        avatar: {
            type: dataTypes.STRING
        }

    };

    let config= {
            tableName:"user",
            createdAt: "created_at",
            updatedAt: "updated_at",
            deletedAt: "deleted_at",
            paranoid: true
    }

    const User= sequelize.define (alias,cols, config);
    
    User.associate= function (models) {

        User.hasMany (models.orders, {
            as: "orders",
            foreignKey: "user_id"
        });
        User.belongsTo (models.users_categories, { 
            as:"users_categories",
            foreignKey:"category_id"

        });

    }
    return User;
}