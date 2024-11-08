// src/components/UserList.js
import React, { useEffect, useState } from 'react';
import api from '../api';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Função para buscar dados do servidor
    const fetchUsers = async () => {
      try {
        const response = await api.get('/users'); // Faz a requisição GET para '/users'
        setUsers(response.data); // Define o estado com os dados recebidos
      } catch (err) {
        setError('Erro ao buscar usuários');
      } finally {
        setLoading(false); // Finaliza o carregamento
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Lista de Usuários</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
