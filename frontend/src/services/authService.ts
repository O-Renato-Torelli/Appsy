import axios from 'axios';

// URL base da API backend
const API_URL = 'http://localhost:3000/api/auth'; // Ajuste para a URL correta do backend

// Função para registrar um novo usuário
export const register = async (username: string, password: string) => {
  const response = await axios.post(`${API_URL}/register`, { username, password });
  return response.data;
};

// Função para fazer login e obter o token JWT
export const login = async (username: string, password: string) => {
  const response = await axios.post(`${API_URL}/login`, { username, password });
  return response.data;
};

// Exemplo de função de requisição autenticada
export const getProtectedData = async () => {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${API_URL}/protected`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  };