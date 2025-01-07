import React, { useState } from 'react';
import './Userlogin.css';
import { useNavigate } from 'react-router-dom';

const Userlogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    console.log('Login button clicked');
    // Normally you would validate the credentials here
    navigate('/user-profile');
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="login-title">Welcome Back</h2>
        <form id="loginForm" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Enter username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter password"
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">Login</button>
        </form>
        <div className="login-links">
          <p><a href="#">Forgot Password?</a></p>
          <p><a href="#">New User? Sign Up</a></p>
        </div>
      </div>
    </div>
  );
};

export default Userlogin;
