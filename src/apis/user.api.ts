import axios from "axios";

const prefix = "users";

export const userApi = {
  getUser: async () => {
    return await axios.get(`${import.meta.env.VITE_SERVER}/${prefix}`);
  },
  createUser: async (data: any) => {
    return await axios.post(`${import.meta.env.VITE_SERVER}/${prefix}`, data);
  },
  updateUser: async (id: string, data: any) => {
    return await axios.put(`${import.meta.env.VITE_SERVER}/${prefix}/${id}`, data);
  },
  deleteUser: async (id: string) => {
    return await axios.delete(`${import.meta.env.VITE_SERVER}/${prefix}/${id}`);
  },
};
