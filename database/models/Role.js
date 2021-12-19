module.exports = (sequelize, dataTypes) => {
    
    let alias = 'Role';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        
        role: {
            type: dataTypes.STRING(100),
            allowNull: false
        }
    };

    let config = {
        timestamps: false,
    }


    const Role = sequelize.define(alias, cols, config); 

    return Role;
};