import React, { useState } from 'react';
import { loginFetch } from '../../utils';
import { useNavigate } from 'react-router-dom';

export default function Login({ user, setUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const login_handler = async (e) => {
    e.preventDefault();
    await loginFetch(username, password, setUser);

   
    // window.location.reload(false);
  };

  const navigate = useNavigate();

  return (
    <div className = "loginBg">
    <div className = 'form-wrapper'>
      {!user ? (
        <div className="form">
          <div className='loginTitile'>Login Page</div>
          <form onSubmit={login_handler}>
            <label alt={username}>Username</label>
            <input
              type="text"
              name="username"
              title="username"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
            <label alt="password">Password</label>
            <input
              type="password"
              name="password"
              title="password"
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
   </div> 
  );
}
