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

<<<<<<< HEAD
const update = (rut) => {
  return http.put(`/admin/${rut}`);
};

const remove = (rut) => {
  return http.delete(`/admin/${rut}`);
=======
const update = (rut, data) => {
  return http.put(`/admin/${rut}`, data);
};

const remove = (rut, data) => {
  return http.delete(`/admin/${rut}`, data);
>>>>>>> 60654ff87d14125bed7668b7048cd927dc428b67
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