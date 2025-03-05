import api from "src/configs/api";

const addCategory = (data) => api.post("category", data);

export { addCategory };
