import React, { useState } from 'react';

export default function Login() {
  const { username, setUsername } = useState('');
  const { password, setPassword } = useState('');

  return (
    <div>
      <h1>Login Page</h1>
      <div class="log-form">
        <h2>Login to your account</h2>
        <form>
          <input
            type="text"
            name="username"
            title="username"
            placeholder="username"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="password"
            name="password"
            title="password"
            placeholder="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <button type="submit" class="btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
