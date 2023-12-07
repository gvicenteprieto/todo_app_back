const server = require("./server/server.js");
require("dotenv").config();

const connect = require("./config/db/dbConexion.js");
connect();

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
});
