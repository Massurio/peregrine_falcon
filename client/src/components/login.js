import { useState } from "react";
import { loginFetch, signUpFetch } from "../utils";

export const Login = ({ setUser }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [passw, setpassw] = useState();
  const [logBool, setLogBool] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (email) {
        signUpFetch(username, email, passw, setUser);
      } else {
        loginFetch(username, passw, setUser);
      }
    } catch (error) {}
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        {!logBool && (
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        )}
        <input
          onChange={(e) => setpassw(e.target.value)}
          placeholder="passwword"
        />
        <button type="submit">Submit</button>
      </form>
      <button
        onClick={(e) => {
          e.preventDefault();
          setLogBool(!logBool);
        }}
      >
        {logBool ? "Sign Up?" : "Log In?"}
      </button>
    </div>
  );
};
