//environment variables
const result = require("dotenv").config({ path: "./config/dev.env" });
console.table(result);

// imports;
const express = require("express");
const { profileRouter } = require("./src/controller/profile");
//const { tradeRouter } = require("./src/controller/trade");

//background processes
require("./database/connector");
//require("./utils/consumers/cancelListener");
//require("./utils/consumers/transactionListener");
//require("./utils/consumers/pricesListener");

// decalre constants
const server = express();
const PORT = 3002//process.env.PROFILE_PORT || 3002;

// configure server
server.use(express.json());
server.use(profileRouter);
//server.use(tradeRouter);

server.listen(PORT, () => {
  console.log(`Profile srver listening on port ${PORT} ....`);
});
