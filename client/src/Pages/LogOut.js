import React from 'react';
import { Link } from 'react-router-dom';
export default function LogOut({ user, setUser }) {
  const logOut = (e) => {
    e.preventDefault();
    localStorage.removeItem('myToken');
    setUser();
  };
  return (
    <div>
      <span>{user} Do you want to logout?</span>
        <button onClick={logOut}>
          <Link to="/" className="link">
            Log out
          </Link>
        </button>
    </div>
  );
}
