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

const update = (rut) => {
  return http.put(`/admin/${rut}`);
};

const remove = (rut) => {
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