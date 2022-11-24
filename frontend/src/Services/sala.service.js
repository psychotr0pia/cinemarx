import http from "./http-common";

const getAll = () => {
  return http.get("/salas");
};

const get = codigo_sala => {
  return http.get(`/salas/${codigo_sala}`);
};

const create = data => {
  return http.post("/salas", data);
};

const update = (codigo_sala, data) => {
  return http.put(`/salas/${codigo_sala}`, data);
};

const remove = (codigo_sala, data) => {
  return http.delete(`/salas/${codigo_sala}`);
};

const removeAll = () => {
  return http.delete(`/salas`);
};


const SalaService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll
};

export default SalaService;
