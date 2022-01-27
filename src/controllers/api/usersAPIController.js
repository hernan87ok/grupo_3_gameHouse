const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');

//Modelo de DB para los usuarios
const Users = db.User;


const usersAPIController = {
    'list': (req, res) => {
        Users.findAll()
        .then(users => { //aca abajo hacer un foreach y crear el nuevo array ???
           
            let usuarios = [];

            users.forEach(element => {
                let usuario = {
                id : element.ID,
                name : element.lastName + ' ' + element.firstName,
                email : element.email,
                detail : '/api/users/' + element.ID,
                }
                usuarios.push(usuario);
            });
            
            let rta = {
            count : users.length,
            users : usuarios
            }
            let respuesta = {
                meta: {
                    status : 200,
                    total: users.length,
                    url: 'api/users'
                },
                data: rta
            }
                res.json(respuesta);
            })
    },
    
    'detail': (req, res) => {
        Users.findByPk(req.params.id)
            .then(user => {
                let respuesta;
                if(user != null ) {
                let encontrado = {
                    id : user.ID,
                    firstName : user.firstName,
                    lastName : user.lastName,
                    email : user.email,
                    avatar : '/img/users/' + user.avatar,
                }
                respuesta = {
                    meta: {
                        status: 200,
                        total: user.length,
                        url: '/api/users/:id'
                    },
                    data: encontrado
                }

            } else {
                 respuesta = {
                    meta: {
                        status: 204,
                        total : 0,
                        url: '/api/users/:id'
                    },
                    data: null
                }
            }
                res.json(respuesta);
            });
    }
}

module.exports = usersAPIController;