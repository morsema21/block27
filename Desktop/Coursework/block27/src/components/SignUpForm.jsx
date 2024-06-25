import React from "react";
import { useState } from "react";
import axios from "axios";
import "../App.css";

export default function SignUpForm({ token, setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        { body: JSON.stringify({ username: username, password: password }) }
      );
      const result = response.data;
      console.log(result);
      setToken(result.token);
    } catch (error) {
      console.log(setError(error.message));
    }
  }

  return (
    <>
      {" "}
      <h2>Sign up</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            maxLength={12}
          />
        </label>
        <label>
          Password:{" "}
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={8}
          />
        </label>
        <button>Submit</button>
      </form>{" "}
    </>
  );
}
