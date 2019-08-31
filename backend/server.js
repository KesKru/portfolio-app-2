//-----------------------Imports-----------------------//
require('dotenv').config();
const express = require('express'); // include express module
const app = express(); // create express instance
const cors = require('cors');
const passport = require('passport');
// Models

//-----------------------Config-----------------------//

// Database
require('./config/databaseConfig')(); //connect to db and tet connection
// Middleware / Configs
app.use(cors()); // Alow Cross-origin resource sharing
app.use(express.urlencoded({ extended: true })); // parse form data
app.use(express.json()); // parse json data
app.use(require('./config/sessionConfig')); // Session config
app.use(passport.initialize());
app.use(passport.session());
require('./config/passportConfig')(); //load and use passport config

// Routes
app.post('/x', (req, res) => {
  console.log(req.body);
});
app.use(require('./routes/index'));
app.get('*', (req, res) => res.json('Route does not exist :('));

//-----------------------Start server-----------------------//

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Example app listening on port ${port}...`));
