const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models').User;

module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'user[email]',
        passwordField: 'user[password]'
      },
      (email, password, done) => {
        User.findOne({ where: { email: email } }).then((user) => {
          if (!user) {
            return done(null, false, {
              message: 'User with this email does not exist.'
            });
          }
          user
            .comparePassword(password)
            .then((match) => {
              if (match) {
                return done(null, user);
              } else {
                return done(null, false, { message: 'Incorrect password.' });
              }
            })
            .catch((err) => {
              return done(err);
            });
        });
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findOne({ where: { id: id } })
      .then((user) => {
        done(null, user);
      })
      .catch((err) => {
        return done(err);
      });
  });
};
