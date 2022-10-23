import http from "./http-common";

const getAll = () => {
  return http.get("/tickets");
};

const get = codigo_tickets => {
  return http.get(`/tickets/${codigo_tickets}`);
};

const create = data => {
  return http.post("/tickets", data);
};

const update = (codigo_tickets, data) => {
  return http.put(`/tickets/${codigo_tickets}`, data);
};

const remove = codigo_tickets => {
  return http.delete(`/tickets/${codigo_tickets}`);
};

const removeAll = () => {
  return http.delete(`/tickets`);
};


const TicketsService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll
};

export default TicketsService;
