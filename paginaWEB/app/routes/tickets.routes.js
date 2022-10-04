module.exports = app => {
	const tickets = require("../controllers/tickets.controller.js");
	var router = require("express").Router();
	//Crear tickets
	router.post("/", tickets.create);
	//Buscar todas las ticketss
	router.get("/", tickets.findAll)
	//Buscar una sola tickets
	router.get("/:codigo_tickets", tickets.findOne)
	//Actualizar tickets
	router.put("/:codigo_tickets", tickets.update);
	//Eliminar tickets
	router.delete("/:codigo_tickets", tickets.delete);
	//Eliminar todas las ticketss
	router.delete("/", tickets.deleteAll);
	//agregar rutas al servidor
	app.use('/api/tickets', router);
};
