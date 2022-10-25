import http from "./http-common";

const getAll = () => {
  return http.get("/funciones");
};

const get = id_funciones => {
  return http.get(`/funciones/${id_funciones}`);
};

const create = data => {
  return http.post("/funciones", data);
};

const update = (id_funciones, data) => {
  return http.put(`/funciones/${id_funciones}`, data);
};

const remove = id_funciones => {
  return http.delete(`/funciones/${id_funciones}`);
};

const removeAll = () => {
  return http.delete(`/funciones`);
};


const FuncionesService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll
};

export default FuncionesService;
