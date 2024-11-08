import React from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  element: React.ReactElement;
}

// Componente de rota protegida
const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const token = localStorage.getItem('token'); // Verifica o token

  return token ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
