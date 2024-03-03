import axios from "axios";

const prefix = "products";

export const productApi = {
  getProduct: async () => {
    return await axios.get(`${import.meta.env.VITE_SERVER}/${prefix}`);
  },
  createProduct: async (data: any) => {
    return await axios.post(`${import.meta.env.VITE_SERVER}/${prefix}`, data);
  },
  updateProduct: async (id: string, data: any) => {
    return await axios.put(
      `${import.meta.env.VITE_SERVER}/${prefix}/${id}`,
      data
    );
  },
  deleteProduct: async (id: string) => {
    return await axios.delete(`${import.meta.env.VITE_SERVER}/${prefix}/${id}`);
  },
};
