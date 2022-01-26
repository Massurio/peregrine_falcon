import React, { useState } from 'react';
import { signUpFetch } from '../utils';
import { Link, useNavigate } from 'react-router-dom';

export default function Registration() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [passw, setpassw] = useState('');
  // const [user, setUser] = useState('');
  const [success, setSuccess] = useState(false);



  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUpFetch(username, email, passw, setSuccess);
    window.location.reload(false);
    // console.log(user);
  };

  const navigate = useNavigate();

  return (
    <div className="form">
      <h1>Sign up Page</h1>
      {!success ? (
      <form onSubmit={handleSubmit}>
        <label alt="username">Username</label>
        <input
          type="text"
          name="username"
          title="username"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label alt="email">Email</label>
        <input
          type="text"
          name="email"
          title="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label alt="password">Password</label>
        <input
          type="password"
          name="password"
          title="password"
          placeholder="password"
          onChange={(e) => setpassw(e.target.value)}
          required
        />
        <br />
        <br />
        {/* <p>{Acount made}</p> */}
        <button type="submit" className="button">
          <Link to="/" />
          submit
        </button>
      </form>): (navigate('/login'))}
      
    </div>
  );
}
