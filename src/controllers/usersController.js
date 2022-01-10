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

      //Busca en DB y valida que no sea existente (Sprint 7)
      let userInDB = Users.findOne ({
        where: {email: {[Op.eq]: `${req.body.email}`}}
      })
      Promise
      .all([userInDB])
      .then(([userInDB]) => {
        // console.log(userInDB.email + '<-- user fuera del if');
        if (  userInDB != null ) {
        // console.log(userInDB.email + '<-- user en if');
        return res.render('./users/register', {
          errors: {
            email: {
              msg: 'Este email ya está registrado'
            }
          },
          oldData: req.body
        });
      }

    //Validacion pass ocho caracteres por lo menos 
    if(req.body.password.length < 8) {
      return res.render('./users/register', {
        errors: {
          password: {
            msg: 'Debe ingresar una contraseña de por lo menos ocho caracteres'
          }
        },
        oldData: req.body
      });
    }
    //Fin validación pass 8 caracteres (Sprint 7)

    //Validacion extensión de avatar
    let admitted= ['.jpg','.jpeg','.png','.gif'];
    // console.log(req.file.filename.match(/\.[0-9a-z]+$/i)[0]);
    if( ! (admitted.includes( req.file.filename.match(/\.[0-9a-z]+$/i)[0]) )   ) {
      return res.render('./users/register', {
        errors: {
          avatar: {
            msg: 'Solo se admiten imágenes de tipo .jpg, .jpeg, .png, .gif'
          }
        },
        oldData: req.body
      });
    }
    //Fin validación de extensión avatar (Sprint 7)

      let userToCreate = {
        ...req.body,
        id_role: 1,
        password: bcryptjs.hashSync(req.body.password, 10),
        avatar: req.file.filename
      }

      //Validamos tamaño de nombre y apellido (Sprint 7)
      if(userToCreate.firstName.length < 2) {
      return res.render('./users/register', {
        errors: {
          firstName: {
            msg: 'El nombre debe tener por lo menos dos caracteres'
          }
        },
        oldData: req.body
      });
    }
    if(userToCreate.lastName.length < 2) {
      return res.render('./users/register', {
        errors: {
          lastName: {
            msg: 'El apellido debe tener por lo menos dos caracteres'
          }
        },
        oldData: req.body
      });
    }
    // Fin validacion tamaño de nombre y apellido (Sprint 7)

    let regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

    //Validacion email Ok (Sprint 7)
    if(!regex.test(userToCreate.email)) {
      return res.render('./users/register', {
        errors: {
          email: {
            msg: 'El formato del correo no es válido'
          }
        },
        oldData: req.body
      });
    }
    //Fin validación email (Sprint 7)

    //Validacion clave obligatoria
    if(userToCreate.password.length == 0) {
      return res.render('./users/register', {
        errors: {
          password: {
            msg: 'Debe ingresar una contraseña'
          }
        },
        oldData: req.body
      });
    }
    //Fin validación clave obligatoria (Sprint 7)}

  

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

    //Validación email vacío (Sprint 7)
    let regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    if(req.body.email== '') {
    return res.render('./users/login', {
      errors: {
        email: {
          msg: 'Debe ingresar un email para poder loguearse'
        }
      }
    });
  }
   // Fin validación email vacío 

    //Validación password vacío (Sprint 7)
    if(req.body.password == '') {
    return res.render('./users/login', {
      errors: {
        password: {
          msg: 'Debe ingresar una contraseña para poder loguearse'
        }
      }
    });
  }
  // Fin validación password vacío 

    //Validacion email válido (Sprint 7)
    if(!regex.test(req.body.email)) {
      return res.render('./users/login', {
        errors: {
          email: {
            msg: 'El formato del correo no es válido'
          }
        }
      });
    }
    //Fin validación email (Sprint 7)


    // let userToLogin = User.findByField('email', req.body.email);
    let userToLogin = Users.findOne ({
      where: {email: {[Op.eq]: `${req.body.email}`}}
    })
    Promise
    .all([userToLogin])
    .then(([userToLogin]) => {
    
    if(userToLogin != null ) {
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
    } else {

    return res.render('./users/login', {
      errors: {
        email: {
          msg: 'No se encuentra este email en nuestra base de datos'
        }
      }
    });
  }}) 
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