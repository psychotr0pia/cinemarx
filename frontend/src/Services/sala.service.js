import http from "./http-common";

const getAll = () => {
  return http.get("/sala");
};

const get = codigo_sala => {
  return http.get(`/sala/${codigo_sala}`);
};

const create = data => {
  return http.post("/sala", data);
};

const update = (codigo_sala, data) => {
  return http.put(`/sala/${codigo_sala}`, data);
};

const remove = codigo_sala => {
  return http.delete(`/sala/${codigo_sala}`);
};

const removeAll = () => {
  return http.delete(`/sala`);
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
