module.exports = (sequelize, dataTypes) => {
    
    let alias = 'Category';
    let cols = {
        ID: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        
        category: {
            type: dataTypes.STRING(100),
            allowNull: false
        }
    };

    let config = {
        timestamps: false,
        tableName: 'categories'
    }


    const Category = sequelize.define(alias, cols, config); 

    Category.associate = function (models) {
        Category.hasMany(models.Product, {
            as: "products",
            foreignKey: "id_category"
        })
    }

    return Category;
};