import http from "./http-common";

const getAll = () => {
  return http.get("/cliente");
};

const get = rut => {
  return http.get(`/cliente/${rut}`);
};

const create = data => {
  return http.post("/cliente", data);
};

const update = (rut, data) => {
  return http.put(`/cliente/${rut}`, data);
};

const remove = rut => {
  return http.delete(`/cliente/${rut}`);
};

const removeAll = () => {
  return http.delete(`/cliente`);
};


const ClienteService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll
};

export default ClienteService;
