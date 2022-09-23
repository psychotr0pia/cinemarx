//dependencias
const db = require("../models");
const Admin = db.admin;
const Op = db.Sequelize.Op;
//Si el query esta vacio
exports.create = (req, res) => {
if(!req.body.rut){
	res.status(400).send({
		message: "El contenido no puede estar vacio"
	});
	return;
}
//Crear un nuevo Admin
const admin = {
	RUT: req.body.rut,
	PASSWORD: req.body.password,
};
//Guardarlo en la base de datos
Admin.create(admin).then(data => {
	res.send(data);
})
.catch(err => {
	res.status(500).send({
	message: 
		err.message || "Error al crear un nuevo ADMIN"
	});
});
};
//Buscar a ADMIN por RUT
//Actualizar password ADMIN
//Eliminar ADMIN
//Eliminar a todos los admins

