//levantamos el servidor, pero antes lo configuramos en otro lado
const server = require("./server/server.js");
require("dotenv").config();

const connect = require("./config/db/db.js");
connect();

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
