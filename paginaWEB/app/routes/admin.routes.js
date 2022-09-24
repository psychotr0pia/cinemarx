module.exports = app => {
	const admin = require("../controllers/admin.controller.js");
	var router = require("express").Router();
	//Crear admin
	router.create("/", admin.create);
	//Buscar a todos los ADMINS (solo devuelve RUT)
	router.findAll("/", admin.findAll)
	//Actualizar password ADMIN
	router.update("/:RUT", admin.update);
	//Eliminar ADMIN
	router.delete("/:RUT", admin.delete);
	//agregar rutas al servidor
	app.use('/api/admin', router);
};
