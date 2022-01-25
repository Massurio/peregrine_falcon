import React, { useState, useEffect } from 'react';
import { loginFetch, tokenFetch } from '../../utils';
import {  useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');
  const [msg, setMsg] = useState('');

  const login_handler = async (e) => {
    e.preventDefault();
    await loginFetch(username, password, setUser);
    console.log(localStorage.getItem('myToken'));
    window.location.reload(false);
  };
  useEffect(() => {
    tokenFetch(setUser);
  }, []);
  console.log(user);

  const navigate = useNavigate();

  return (
    <div>
      {!user ? (
        <div className="form">
          <h1>Login Page</h1>
          <form onSubmit={login_handler}>
            <labe alt={username}>Username</labe>
            <input
              type="text"
              name="username"
              title="username"
              placeholder="username"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
            <label alt='password'>Password</label>
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
              // onClick={()=> {navigate('/userpage')}}

              type="submit"
              className="button"
            >
              Login
            </button>
          </form>
        </div>
      ) : (
        navigate('/userpage')
      )}
    </div>
  );
}
