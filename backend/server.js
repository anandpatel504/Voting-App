const express = require("express");
const app = express();
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require("cors")
app.use(bodyParser());
app.use(cors());
app.use(express.json());

const knex = require("./models/database")
const PORT = process.env.PORT || 3001;

// route to signup.js
const candidate_register = express.Router();
app.use("/", candidate_register);
require("./Routes/candidate_register")(candidate_register, jwt, knex);

// route to vote_status.js
const vote_status = express.Router();
app.use("/", vote_status);
require("./Routes/vote_status")(vote_status, knex);

// the port listener
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})