import React from 'react';

const LoginPage = ({ onLogin }) => {
  const handleLogin = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="login-container">
      <h2>Dummy Login/Signup</h2>
      <form onSubmit={handleLogin} className="login-form">
        <input type="text" placeholder="Username" className="login-input" />
        <input type="password" placeholder="Password" className="login-input" />
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;