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
        first_name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        last_name: {
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
        role_id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            allowNull: false
        }
    };


    let config = {
        timestamps: false,
    }


    const User = sequelize.define(alias, cols, config); 

    User.associate = function (models) {
        User.belongsTo(models.Role, { // models.Role -> Role es el valor de alias en Role.js
            as: "role",
            foreignKey: "role_id"
        })
    }

    return User
};