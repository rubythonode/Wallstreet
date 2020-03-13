//environment variables
let result = require("dotenv").config({ path: "./config/dev.env" });
console.table(result.parsed);

// imports
const express = require("express");
const cookieParser = require("cookie-parser");
const { profileRouter } = require("./src/Router/profile");
const { loginRouter } = require("./src/Router/login");
const { tradeRouter } = require("./src/Router/trade");

// constants
const server = express();
const PORT = process.env.GATEWAY_PORT || 3000;

// configure
server.use(express.json());
server.use(cookieParser());
server.use(profileRouter);
server.use(loginRouter);
server.use(tradeRouter);

server.listen(PORT, () => {
  console.log(`Gateway API up & running at port ${PORT}....`);
});
