import api from '../api';

export async function getHelloMessage() {
  const response = await api.get(`/`)
  return response.data
}
