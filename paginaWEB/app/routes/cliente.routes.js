module.exports = app => {
	const cliente = require("../controllers/cliente.controller.js");
	var router = require("express").Router();
	//Crear cliente
	router.post("/", cliente.create);
	//Buscar a todos los clienteS (solo devuelve RUT)
	router.get("/", cliente.findAll)
	//Actualizar password cliente
	router.put("/:rut", cliente.update);
	//Eliminar cliente
	router.delete("/:rut", cliente.delete);
	//Eliminar a todos los clienteS
	router.delete("/", cliente.deleteAll);
	//agregar rutas al servidor
	app.use('/api/cliente', router);
};
