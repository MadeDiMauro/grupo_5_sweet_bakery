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
        category: {
            type: dataTypes.STRING,
        },
        avatar: {
            type: dataTypes.INTEGER
        }

    };

    let config= {
        tableName:"Usuarios",
        timestamps: false
    }

    const Users= sequelize.define (alias,cols, config);
    return Usuarios;
}