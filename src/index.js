const express = require("express"); // Importando express para crear el servidor
const morgan = require("morgan"); // Importando morgan para ver las peticiones en consola
const cors = require("cors"); // Importando cors para permitir peticiones desde otros servidores

const trabookRoutes = require("./routes/trabook.routes"); // Importando las rutas de la API

const app = express(); // Creando el servidor

app.use(cors()); // Permitiendo peticiones desde otros servidores
app.use(morgan("dev")); // Mostrando las peticiones en consola
app.use(express.json()); // Permitiendo el uso de JSON
app.use(cors()); // Permitiendo peticiones desde otros servidores
app.use(morgan("dev")); // Mostrando las peticiones en consola
app.use(express.json()); // Permitiendo el uso de JSON

app.use(trabookRoutes); // Usando las rutas de la API

// Manejando errores
app.use((err, rq, res, next) => {
  return res.json({ message: err.message });
});

app.listen(4000); // Iniciando el servidor en el puerto 4000
console.log("Server on port 4000"); // Mostrando mensaje en consola
