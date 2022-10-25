//dependencias
const { query } = require("express");
const { cliente } = require("../models");
const db = require("../models");
const Cliente = db.cliente;
const Op = db.Sequelize.Op;

//Si el query esta vacio
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "El contenido no puede estar vacio"
        });
        return;
    }
    //Crear una nuevo cliente
    const cliente = {
        RUT: req.body.rut,
        NOMBRE: req.body.nombre,
        APELLIDO: req.body.apellido,
        EDAD: req.body.edad
    };
    //Guardarlo en la base de datos
    Cliente.create(cliente).then(data => {
        res.status(200).send(data);
    })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error al crear una nuevo cliente"
            });
        });
};


//Buscar todas los clientes
exports.findAll = (req, res) => {
    Cliente.findAll({ include:{ model: db.tickets} })
        .then(data => {
            res.status(200).send(data);
        });
};


//Buscar un cliente por PK
exports.findOne = (req, res) => {
    const rut = req.params.rut;
    Cliente.findByPk(rut,{ include:{ model: db.tickets} })
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se encontró el cliente.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error en la búsqueda"
            });
        });
};



//Actualizar datos clientes
exports.update = (req, res) => {
	const rut = req.params.rut;
	Cliente.update(req.body, {where: {rut: rut}})
	.then(num => {
        if (num == 1) {
            res.status(200).send({
                message: "Cliente actualizado"
            });
        } else {
            res.send({
                message: "No se pudo actualizar el cliente"
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error en actualización"
        });
    });
};

//Eliminar sala
exports.delete = (req, res) => {
	const rut = req.params.rut;
	Sala.destroy({where: {rut : rut}})
	.then(num => {
        if (num == 1) {
            res.status(200).send({
                message: "Cliente eliminado de la base de datos."
            });
        } else {
            res.send({
                message: `No se pudo eliminar el cliente de la base de datos.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error en eliminacion"
        });
    });
};


//Eliminar todas las salas
exports.deleteAll = (req, res) => {
	Cliente.destroy({
		where: {},
		truncate: false
	}).
		then(nums => {
			res.status(200).send({message: 'Todas los clientes eliminadas!'});
		})
		.catch(err => {
			res.status(500).send({
				message:
				err.message || "Error al eliminar todos los clientes"
			});
		});
};








