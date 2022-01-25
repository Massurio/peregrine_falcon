import React, { useState } from 'react';
import { signUpFetch } from '../utils';

export default function Registration() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [passw, setpassw] = useState('');
  const [user, setUser] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUpFetch(username, email, passw, setUser);
    console.log(user);
  };

  return (
    <div className="form">
      <h1>Sign up Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          title="username"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="text"
          name="email"
          title="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          title="password"
          placeholder="password"
          onChange={(e) => setpassw(e.target.value)}
        />
        <br />
        <br />
        <button type="submit" className="button">
          submit
        </button>
      </form>
    </div>
  );
}
