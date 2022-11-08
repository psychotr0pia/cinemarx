//dependencias
const { query } = require("express");
const { tickets } = require("../models");
const db = require("../models");
const Tickets = db.tickets;
const Op = db.Sequelize.Op;

//Si el query esta vacio
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "El contenido no puede estar vacio"
        });
        return;
    }


//Crear un nuevo tickets
const tickets = {
    precio: req.body.precio,
    fecha_compra: req.body.fecha_compra,
    codigo_asiento: req.body.tipo_codigo_asiento,
    id_funciones: req.body.id_funciones
};

//Guardarlo en la base de datos
Tickets.create(tickets).then(data => {
    res.status(200).send(data);
})
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Error al crear un nuevo tickets"
        });
    });
};


//Buscar todos los tickets
exports.findAll = (req, res) => {
	Tickets.findAll({ include: [{ model: db.funciones} , {model: db.asiento}]})
	.then(data =>{
		res.status(200).send(data);
	});
};

//Buscar un ticket por PK
exports.findOne = (req,res) => {
    const id_tickets = req.params.id_tickets;
    Tickets.findByPk(id_tickets,{ include: [{ model: db.funciones} , {model: db.asiento}]})
    .then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `No se encontró el ticket.`
            });
         }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error en la búsqueda"
        });
    });
};



//Actualizar datos sala
exports.update = (req, res) => {
	const id_tickets = req.params.id_tickets;
	Tickets.update(req.body, {where: {id_tickets: id_tickets}})
	.then(num => {
        if (num == 1) {
            res.status(200).send({
                message: "Ticket actualizado"
            });
        } else {
            res.send({
                message: "No se pudo actualizar el ticket"
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
	const codigo_tickets = req.params.codigo_tickets;
	Tickets.destroy({where: {codigo_tickets : codigo_tickets}})
	.then(num => {
        if (num == 1) {
            res.status(200).send({
                message: "Ticket eliminado de la base de datos."
            });
        } else {
            res.send({
                message: `No se pudo eliminar el ticket de la base de datos.`
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
	Tickets.destroy({
		where: {},
		truncate: false
	}).
		then(nums => {
			res.status(200).send({message: 'Todos los tickets eliminados!'});
		})
		.catch(err => {
			res.status(500).send({
				message:
				err.message || "Error al eliminar todos tickets eliminados"
			});
		});
};




