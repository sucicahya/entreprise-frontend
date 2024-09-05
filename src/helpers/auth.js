import React from 'react';
import { Navigate } from 'react-router-dom';

const auth = (WrappedComponent) => {
  return (props) => {
    const token = localStorage.getItem('authToken');
    
    if (!token) {
      return <Navigate to="/login" />;
    }

    return <WrappedComponent {...props} />;
  };
};

export default auth;
