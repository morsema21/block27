import React from "react";
import { useState } from "react";
import axios from "axios";

export default function Authenticate({ token }) {
  const [successMessage, setSuccessMessage] = useState(null);

  const [error, setError] = useState(null);
  async function handleClick() {
    try {
      const response = await axios.get(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.data;
      setSuccessMessage(result.message);
      setUsernameValue(result.data);
      console.log(successMessage);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div>
      <h2>Authenticate</h2>
      {successMessage && <p>{successMessage} </p>}
      {error && <p>{error}</p>}
      <button onClick={handleClick}>Authenticate Token</button>
    </div>
  );
}
