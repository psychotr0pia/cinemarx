import http from "./http-common";

const getAll = () => {
  return http.get("/asientos");
};

const get = codigo_de_asiento => {
  return http.get(`/asientos/${codigo_de_asiento}`);
};

const create = data => {
  return http.post("/asientos", data);
};

const update = (codigo_de_asiento, data) => {
  return http.put(`/asientos/${codigo_de_asiento}`, data);
};

const remove = codigo_de_asiento => {
  return http.delete(`/asientos/${codigo_de_asiento}`);
};

const removeAll = () => {
  return http.delete(`/asientos`);
};


const AsientosService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll
};

export default AsientosService;
