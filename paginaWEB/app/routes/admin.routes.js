module.exports = app => {
	const admin = require("../controllers/admin.controller.js");
	var router = require("express").Router();
	//Crear admin
	router.post("/", admin.create);
	//Buscar a todos los ADMINS (solo devuelve RUT)
	router.get("/", admin.findAll)
	//Actualizar password ADMIN
	router.put("/:rut", admin.update);
	//Eliminar ADMIN
	router.delete("/:rut", admin.delete);
	//agregar rutas al servidor
	app.use('/api/admin', router);
};
