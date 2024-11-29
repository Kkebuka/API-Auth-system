import React, { useState } from "react";
import axios from "axios";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("", {
        username,
        password,
      });

      const { access_token } = response.data;
      localStorage.setItem("access_token", access_token);

      console.log("Login succesfully: ", response.data);
    } catch {
      setErrorMessage("Login failed, please check your crendentials");
    }
  };

  return (
    <div>
      <form
        onSubmit={() => {
          handleSubmit();
        }}
      >
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          required
        />
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />
        {setErrorMessage && <h5> {errorMessage}</h5>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
