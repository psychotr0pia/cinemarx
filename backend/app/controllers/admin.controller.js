//dependencias
const { query } = require("express");
const { admin } = require("../models");
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
    rut: req.body.rut,
    password: req.body.password,
};
if ((admin.password).length < 4) {
    return res.status(400).json({
        message: "La contraseña no puede tener un largo menor a 4"
    });
}
//Guardarlo en la base de datos
Admin.create(admin).then(data => {
	res.status(200).send(data);
})
.catch(err => {
	res.status(500).send({
	message: 
		err.message || "Error al crear un nuevo ADMIN"
	});
});
};
//Buscar a todos los ADMINS (solo devuelve RUTs)
exports.findAll = (req, res) => {
	Admin.findAll()
	.then(data =>{
		res.status(200).send(data);
	});
};

//Actualizar password ADMIN
exports.update = (req, res) => {
	const rut = req.params.rut;
	console.log(rut)
	console.log(req.body)
	Admin.update(req.body, {where: {rut: rut}})
	.then(num => {
        if (num == 1) {
            res.status(200).send({
                message: "Password de admin actualizado."
            });
        } else {
            res.send({
                message: `No se pudo actualizar la password del Admin`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error en actualización"
        });
    });

};
//Eliminar ADMIN
exports.delete = (req, res) => {
	const rut = req.params.rut;
	Admin.destroy({where: {rut: rut}})
	.then(num => {
        if (num == 1) {
            res.status(200).send({
                message: "Admin eliminado de la base de datos."
            });
        } else {
            res.send({
                message: `No se pudo eliminar Admin de la base de datos.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error en eliminacion"
        });
    });
};
//Eliminar a todos los admins
exports.deleteAll = (req, res) => {
        Admin.destroy({
                where: {},
                truncate: false
        }).
                then(nums => {
                        res.status(200).send({message: '${nums} ADMINS eliminados!'});
                })
                .catch(err => {
                        res.status(500).send({
                                message:
                                err.message || "Error al eliminar a todos los ADMINS"
                        });
                });
};
      
