const { validationResult }= require('express-validator');

const User = require('../models/User.js');

const usersController = {
    login: (req,res) => {
      res.render('./users/login.ejs');
    },

    register: (req,res) => {
      res.render('./users/register.ejs');
    },

    processRegister: (req, res) => {
        const resultValidation = validationResult(req);
                
        if (resultValidation.errors.length > 0) {
          return res.render('./users/register.ejs', {
            errors: resultValidation.mapped(),
            oldData: req.body
          });
        }

        User.create(req.body); 
          return res.send('Se creó el usuario');
    },

    profile: (req, res) => {
      return res.render('./users/profile.ejs');
    }
  }

  
  
  module.exports = usersController;