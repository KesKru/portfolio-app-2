const User = require('../models/index').User;
const errors = {};

//-----------------------Controlers-----------------------//

module.exports = {
  createUser: (req, res) => {
    newUser = User.build(req.body.user);
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
