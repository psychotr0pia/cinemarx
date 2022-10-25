//dependencias
const { query } = require("express");
const { funciones, pelicula } = require("../models");
const db = require("../models");
const Funciones = db.funciones;
const Op = db.Sequelize.Op;
//Si el query esta vacio
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Tiene que ingresar un horario valido"
        });
        return;
    }
    //Crear una nueva funcion
    const funciones = {
        rut: req.body.rut,
        horario: req.body.horario,
        id_pelicula: req.body.id_pelicula,
        CODIGO_SALA: req.body.codigo_sala
    };
    //Guardarlo en la base de datos
    Funciones.create(funciones).then(data => {
        res.status(200).send(data);
    })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error al crear una nueva FUNCION"
            });
        });
};
//Buscar todas las funciones 
exports.findAll = (req, res) => {
    if (req.body.join) {
        Funciones.findAll({ include: [{ model: db.pelicula} ,{model: db.sala} ]})
            .then(data => {
                res.status(200).send(data);
            });
    }
    else {
        Funciones.findAll()
            .then(data => {
                res.status(200).send(data);
            });
    }

};

//Buscar una funcion por PK
exports.findOne = (req, res) => {
    const id_funciones = req.params.id_funciones;
    if (req.body.join) {//aqui busca con el join
        Funciones.findByPk(id_funciones,{ include: [{ model: db.pelicula} ,{model: db.sala} ]})
            .then(data => {
                if (data) {
                    res.send(data);
                } else {
                    res.status(404).send({
                        message: `No se encontró la funcion.`
                    });
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: "Error en la búsqueda"
                });
            });
    }
    else {
        Funciones.findByPk(id_funciones,{ include: [{ model: db.pelicula} ,{model: db.sala} ]})//aqui busca sin el join
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se encontró la funcion.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error en la búsqueda"
            });
        });
    }

};
//Actualizar horario funcion
exports.update = (req, res) => {
    const id_funciones = req.body.id_funciones;
    Funciones.update(req.body, { where: { id_funciones: id_funciones } })
        .then(num => {
            if (num == 1) {
                res.status(200).send({
                    message: "Horario actualizado"
                });
            } else {
                res.send({
                    message: `No se pudo actualizar la funcion`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error en actualización"
            });
        });

};
//Eliminar funcion
exports.delete = (req, res) => {
    const id_funciones = req.body.funciones;
    Funciones.destroy({ where: { id_funciones: id_funciones } })
        .then(num => {
            if (num == 1) {
                res.status(200).send({
                    message: "Funcion eliminada de la base de datos."
                });
            } else {
                res.send({
                    message: `No se pudo eliminar la funcion de la base de datos.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error en eliminacion"
            });
        });
};
//Eliminar todas las funciones
exports.deleteAll = (req, res) => {
    Funciones.destroy({
        where: {},
        truncate: false
    }).
        then(nums => {
            res.status(200).send({ message: 'Funciones eliminadas!' });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error al eliminar todas las funciones!"
            });
        });
};
