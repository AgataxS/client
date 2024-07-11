// src/components/layout/Header.js
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../AuthContext';
import '../../styles/Header.css';

const Header = () => {
  const history = useHistory();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    history.push('/login');
  };

  return (
    <header className="header">
      <h1>Preg Quiz App</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          {user ? (
            <>
              <li><Link to="/quiz">Start Quiz</Link></li>
              <li className="user-info">
                <span className="user-icon">👤</span>
                <span className="user-name">{user.nombre}</span>
              </li>
              <li><button onClick={handleLogout} className="logout-btn">Salir</button></li>
            </>
          ) : (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;