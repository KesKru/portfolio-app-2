//-----------------------Modules-----------------------//

const express = require('./node_modules/express'); // include express module
const bodyParser = require('./node_modules/body-parser'); // parsing incoming express
const passport = require('passport'); // library for validation
const cors = require('./node_modules/cors/lib');
const app = express(); // create an express instance
// Include routes
const routes = require('./routes/index');
//-----------------------Config-----------------------//

// Database
require('./config/databaseConfig'); // load db config and connect to it
// Passport
require('./config/passportConfig'); // load passport config
// Middleware
app.use(cors()); // Alow Cross-origin resource sharing
app.use(bodyParser.urlencoded({ extended: false })); // parse form data
app.use(bodyParser.json()); // parse json data
app.use(require('./config/sessionsConfig')); // Sessions config
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use(routes);
app.get('*', (req, res) => res.send('Such route does not exist'));


//-----------------------Start server-----------------------//

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Example app listening on port ${port}...`));
 