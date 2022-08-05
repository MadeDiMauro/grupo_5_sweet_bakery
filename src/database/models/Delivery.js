module.exports= (sequelize,dataTypes) => {
    let alias= "Entregas";  
    let cols= {
        id: {
        type: dataTypes.INTEGER,
        primayKey:true,
        autoIncrement:true,
        allowNull:false,
        },
        adress: {
        type: dataTypes.TEXT,
        },
        location:{
        type: dataTypes.TEXT,
        },
        comments: {
        type:dataTypes.TEXT,
        }
    };

    let config= {
        tableName:"Entregas",
        timestamps: false
    }

    const Delivery= sequelize.define (alias,cols, config);
    return Delivery;
}