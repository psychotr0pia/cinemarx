module.exports = app => {
    const coment = require("../controllers/coment.controller");
    var router = require("express").Router();

    router.post("/", coment.create);
    router.get("/", coment.findAll);
    router.get("/:id", coment.findId);
    router.put("/:id", coment.update);
    router.delete("/:id", coment.delete);
    router.delete("/", coment.deleteAll);
    app.use('/api/coment', router);
  };
