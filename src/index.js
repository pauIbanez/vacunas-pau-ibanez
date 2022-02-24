require("dotenv").config();
const connectToDB = require("./database");
const startUI = require("./ui");

const connectionString = process.env.CONN_STRING;

(async () => {
  await connectToDB(connectionString);
  startUI();
})();
