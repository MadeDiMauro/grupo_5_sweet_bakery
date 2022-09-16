module.exports = (sequelize, dataTypes) => {
    let alias = "order_detail";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        quantity: {
            type: dataTypes.DECIMAL
        },
        product_id: {
            type: dataTypes.INTEGER
        },
        order_id: {
            type: dataTypes.INTEGER
        }
    };

    let config = {
        tableName: "order_detail",
        timestamps: false
    }

    const Order_detail = sequelize.define(alias, cols, config);

    return Order_detail;
}