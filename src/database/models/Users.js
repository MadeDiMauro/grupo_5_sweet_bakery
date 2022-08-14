module.exports= (sequelize,dataTypes) => {
    let alias= "Usuarios";  
    let cols= {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primayKey:true,
            autoIncrement:true
        },
        firstname: {
            type: dataTypes.STRING,
        },
        lastname: {
            type: dataTypes.STRING,
        },
        email: {
            type: dataTypes.STRING,
        },
        password: {
            type: dataTypes.STRING,
        },
        phone: {
            type: dataTypes.DECIMAL, //??
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
            tableName:"Usuarios",
            timestamps: false
    }

    const Users= sequelize.define (alias,cols, config);
    Users.associate= function (models) {
        Users.hasMany (models.Orders, {
            as: "Órdenes",
            foreignKey: "user_id"
        });
    Users.belongsTo (models.Categories, {  //tengo duda sobre este también!
            as:"Categorías de Usuarios",
            foreignKey:"category_id"

        });
    }
    return Usuarios;
}