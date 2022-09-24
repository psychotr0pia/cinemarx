//Importar dependencias
const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./app/models");
//configuración de cors (control de acceso)
app.use(cors())
// analizar las solicitudes de tipo de contenido - application/json
app.use(express.json());
// analizar las solicitudes de tipo de contenido - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// ruta simple
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

db.sequelize.sync()
    .then(() => {
        console.log("Synced db.");
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });
<<<<<<< HEAD

=======
// en desarrollo
/*
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});
*/
require("./app/routes/admin.routes")(app);
>>>>>>> 9e5c5b922a0eff8b9508f3153f0f234ef8778d57
// Configurar puertos
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
