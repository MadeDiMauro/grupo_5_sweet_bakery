module.exports= (sequelize,dataTypes) => {
    let alias= "users_categories";  
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

    const User_categories= sequelize.define (alias,cols, config);
    User_categories.associate= function (models) {
        User_categories.hasMany (models.Users, {
            as: "users",
            foreignKey: "category_id"
        });
    }


    return User_categories;
}