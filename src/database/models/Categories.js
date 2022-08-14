module.exports= (sequelize,dataTypes) => {
    let alias= "Categorías";  
    let cols= {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primayKey:true,
            autoIncrement:true
        },
        type: {
            type: dataTypes.STRING
        },
        condition: {
            type: dataTypes.STRING
        }

    };

    let config= {
            tableName:"Categorías",
            timestamps: false
    }

    const Categories= sequelize.define (alias,cols, config);
    Categories.associate= function (models) {
        Categories.hasMany (models.Users, {
            as: "Usuarios",
            foreignKey: "category_id"
        });
    }


    return Categories;
}