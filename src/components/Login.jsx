import React, { useState } from "react";
import axios from "axios";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  //   const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username,
        password,
      });

      const { accessToken } = response.data;
      localStorage.setItem("access_token", accessToken);
      setErrorMessage(null);

      console.log("Login succesfully: ", response.data);
      //   navigate("/url")
    } catch {
      setErrorMessage("Login failed, please check your crendentials");
    }
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
          console.log("done");
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
        {errorMessage && <h5> {errorMessage}</h5>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
