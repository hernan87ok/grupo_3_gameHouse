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
    }


    const Cateogry = sequelize.define(alias, cols, config); 

    return Category;
};