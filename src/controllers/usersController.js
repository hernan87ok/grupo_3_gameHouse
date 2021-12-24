const bcryptjs = require('bcryptjs');

const { validationResult } = require('express-validator');


//JSON
// const User = require('../models/User.js');


//Soporte DB - Sequelize
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

let Users = db.User;
let Roles = db.Role;

///

const usersController = {
  register: (req,res) => {
    res.render('./users/register');
  },

  processRegister: (req, res) => { //Ok con db
      const resultValidation = validationResult(req);
              
      if (resultValidation.errors.length > 0) {
        return res.render('./users/register', {
          errors: resultValidation.mapped(),
          oldData: req.body
        });
      }

      //Busca en DB
      // let userInDB = Users.('email', req.body.email);
      let userInDB = Users.findAll ({
        where: {email: {[Op.like]: `%${req.body.email}%`}}
      })
      Promise
      .all([userInDB])
      .then(([userInDB]) => {
      
        if (userInDB != '') {
        // console.log(userInDB + '<-- user');
        return res.render('./users/register', {
          errors: {
            email: {
              msg: 'Este email ya está registrado'
            }
          },
          oldData: req.body
        });
      }


      let userToCreate = {
        ...req.body,
        id_role: 1,
        password: bcryptjs.hashSync(req.body.password, 10),
        avatar: req.file.filename
      }

      let userCreated = Users.create(userToCreate)
      .then(()=> {

      return res.redirect('/users/login')})
      .catch(error => res.send(error))
     
      });
    },

       

  login: (req, res) => {
    res.render('./users/login');
  },

  loginProcess: (req, res) => { //Ok con db

    // let userToLogin = User.findByField('email', req.body.email);
    let userToLogin = Users.findOne ({
      where: {email: {[Op.like]: `${req.body.email}`}}
    })
    Promise
    .all([userToLogin])
    .then(([userToLogin]) => {
    
    if(userToLogin != '') {
      // console.log(userToLogin + '<-- user');
      let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
      if (isOkThePassword) {
        delete userToLogin.password;
        req.session.userLogged = userToLogin;

        if(req.body.remember_user) {
          res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
        }

        return res.redirect('/users/profile');
      } 
      return res.render('./users/login', {
        errors: {
          email: {
            msg: 'Las credenciales son inválidas'
          }
        }
      });
    }

    return res.render('./users/login', {
      errors: {
        email: {
          msg: 'No se encuentra este email en nuestra base de datos'
        }
      }
    });
  })
  .catch (error => res.send(error))
  },

  profile: (req, res) => {
    return res.render('./users/profile', {
      user: req.session.userLogged
    });
  },

  logout: (req, res) => {
    res.clearCookie('userEmail');
    req.session.destroy();
    return res.redirect('/');
  }
}

  
  
  module.exports = usersController;