// src/api.js ou src/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.exemplo.com', // URL base da sua API
  timeout: 10000, // Tempo limite de 10 segundos para as requisições
});

// Interceptor para anexar token de autenticação (opcional)
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Obtenha o token de autenticação, se existir
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor para tratar erros globais (opcional)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Exemplo: redireciona para a página de login em caso de erro 401
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
