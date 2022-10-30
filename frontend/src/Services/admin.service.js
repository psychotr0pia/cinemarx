import http from "./http-common";

const getAll = () => {
  return http.get("/admin");
};

const get = rut => {
  return http.get(`/admin/${rut}`);
};

const create = data => {
  return http.post("/admin", data);
};

const update = (rut, data) => {
  return http.put(`/admin/${rut}`, data);
};

const remove = (rut, data) => {
  return http.delete(`/admin/${rut}`, data);
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
