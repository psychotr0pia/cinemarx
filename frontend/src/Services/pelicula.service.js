import http from "./http-common";

const getAll = () => {
  return http.get("/pelicula");
};

const get = id_pelicula => {
  return http.get(`/pelicula/${id_pelicula}`);
};

const create = data => {
  return http.post("/pelicula", data);
};

const update = (id_pelicula, data) => {
  return http.put(`/pelicula/${id_pelicula}`, data);
};

const remove = id_pelicula => {
  return http.delete(`/pelicula/${id_pelicula}`);
};

const removeAll = () => {
  return http.delete(`/pelicula`);
};


const PeliculaService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll
};

export default PeliculaService;