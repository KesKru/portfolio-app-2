//-----------------------Modules-----------------------//
const path = require('path');
//-----------------------Models-----------------------//
const md = require('../models/index');
const errors = {};

//-----------------------Controlers-----------------------//
module.exports = {
  createUser: (req, res) => {
    newUser = md.User.build({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });
    newUser.hashPassword().then((hash) => {
      newUser.password = hash;
      newUser
        .save()
        .then((user) => {
          res.json({ user: user });
        })
        .catch((err) => {
          res.send(err);
        });
    });
  }
};
