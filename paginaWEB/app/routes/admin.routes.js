module.exports = app => {
	const admin = require("../controllers/admin.controller.js");
	var router = require("express").Router();
	//Crear admin
	router.post("/", admin.create);
	//agregar rutas al servidor
	app.use('/api/admins', router);
};
