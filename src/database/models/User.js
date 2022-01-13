module.exports = (sequelize, dataTypes) => {
    
    let alias = 'User';
    let cols = {
        ID: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        firstName: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        lastName: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        avatar: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        id_role: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        }
    };


    let config = {
        timestamps: false,
        tableName: 'users'
    }


    const User = sequelize.define(alias, cols, config); 

    User.associate = function (models) {
        User.belongsTo(models.Role, { // models.Role -> Role es el valor de alias en Role.js
            as: "role",
            foreignKey: "id_role"
        })
    }

    return User
};