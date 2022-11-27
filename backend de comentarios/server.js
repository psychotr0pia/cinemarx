require('dotenv').config();
//Importar dependencias
const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const bp = require('body-parser')

const app = express();
//configuración de cors (control de acceso)
app.use(cors())
// analizar las solicitudes de tipo de contenido - application/json
app.use(bp.json())
// analizar las solicitudes de tipo de contenido - application/x-www-form-urlencoded
app.use(bp.urlencoded({ extended: true }))

require("./app/routes/coment.routes")(app);

const PORT = process.env.PORT || 666;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

mongoose.connect(process.env.DATABASE_URL);
const database = mongoose.connection;
database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
