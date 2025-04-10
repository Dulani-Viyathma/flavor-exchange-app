import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  // If user already logged in, redirect to home
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      navigate('/');
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();

    if (username.trim() === '') {
      alert('Please enter a username');
      return;
    }

    // Save user in localStorage
    localStorage.setItem('user', JSON.stringify({ username }));

    // Redirect to home
    navigate('/');
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ marginLeft: '10px' }}
          />
        </label>
        <br /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
