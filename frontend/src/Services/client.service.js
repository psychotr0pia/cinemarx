import http from "./http-common";

const getAll = () => {
  return http.get("/admin");
};

const get = id => {
  return http.get(`/admin/${id}`);
};

const create = data => {
  return http.post("/admin", data);
};

const update = (id, data) => {
  return http.put(`/admin/${id}`, data);
};

const remove = id => {
  return http.delete(`/admin/${id}`);
};

const removeAll = () => {
  return http.delete(`/admin`);
};


const ClientService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll
};

export default ClientService;
