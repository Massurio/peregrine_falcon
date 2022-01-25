import React, { useState, useEffect } from 'react';
import { loginFetch, tokenFetch } from '../utils';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');

  const login_handler = async (e) => {
    e.preventDefault();
    await loginFetch(username, password, setUser);
    console.log(localStorage.getItem('myToken'));
  };
  useEffect(() => {
    tokenFetch(setUser);
  }, []);

  return (
    <div>
      {user && <h1>working</h1>}
      {!user && <h1>Not working</h1>}

      <h1>Login Page</h1>
      <div className="form">
        <form onSubmit={login_handler}>
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
          <button
            // onChange={(event) => {
            //   setUser(event.target.value);
            // }}
            type="submit"
            className="button"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
