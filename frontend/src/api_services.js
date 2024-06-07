
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;

const apiClient = axios.create({
  baseURL: `${API_BASE_URL}/api`,
//   withCredentials: true, 
});

export const getSomeData = async () => {
  const response = await apiClient.get('/some-endpoint');
  return response.data;
};
