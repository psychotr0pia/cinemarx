import http from "./http-common";

const getAll = () => {
  return http.get("/admin");
};

const get = id => {
  return http.get(`/admin/${rut}`);
};

const create = data => {
  return http.post("/admin", data);
};

const update = (id, data) => {
  return http.put(`/admin/${rut}`, data);
};

const remove = id => {
  return http.delete(`/admin/${rut}`);
};

const removeAll = () => {
  return http.delete(`/admin`);
};


const AdminService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll
};

export default AdminService;
