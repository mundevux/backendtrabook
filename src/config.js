const { config } = require("dotenv");
config();

module.exports = {
  db: {
    host: "localhost",
    user: "postgres", //Modificar el usuario en caso de que sea necesario
    password: "1234", //Modificar la contraseña en caso de que sea necesario
    port: "5432",
    database: "trabookdb", //Modificar la base de datos en caso de que sea necesarios
  },
};
