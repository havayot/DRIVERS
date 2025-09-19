import axios from "axios";
export const API = axios.create({ baseURL: "http://localhost:5000/api" });

export const getPassengers = () => API.get("/passengers");
export const addPassenger = (data) => API.post("/passengers", data);
export const updatePassenger = (id, data) => API.put(`/passengers/${id}`, data);
export const deletePassenger = (id) => API.delete(`/passengers/${id}`);

export const getExceptions = () => API.get("/exceptions");
export const addException = (data) => API.post("/exceptions", data);
