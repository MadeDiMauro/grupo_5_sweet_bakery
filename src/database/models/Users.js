module.exports= (sequelize,dataTypes) => {
    let alias= "users";  
    let cols= {
        id: {
            type: dataTypes.INTEGER,
            primayKey:true,
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
            createdAt: "created_at",
            updatedAt: "updated_at",
            deletedAt: "deleted_at",
            paranoid: true
    }

    const Users= sequelize.define (alias,cols, config);
    
    Users.associate= function (models) {

        Users.hasMany (models.Orders, {
            as: "orders",
            foreignKey: "user_id"
        });
        Users.belongsTo (models.Users_categories, { 
            as:"users_categories",
            foreignKey:"category_id"

        });

    }
    return Users;
}