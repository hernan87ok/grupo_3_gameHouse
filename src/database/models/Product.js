module.exports = (sequelize, dataTypes) => {
    
    let alias = 'Product';
    let cols = {
        ID: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        price: {
            type: dataTypes.BIGINT(10),
            allowNull: false
        },
        description: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        console: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        image: {
            type: dataTypes.STRING(255),
            allowNull: true
        },
        id_category: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        },
    };


    let config = {
        timestamps: false,
        tableName: 'products'
    }


    const Product = sequelize.define(alias, cols, config); 

    Product.associate = function (models) {
        Product.belongsTo(models.Category, { // models.Category -> Category es el valor de alias en Category.js
            as: "category",
            foreignKey: "id_category"
        })
    }

    return Product
};