import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          id="username"
          value={username}
          onClick={(e) => {
            setUsername(e.target.value);
          }}
          required
        />
        <input
          type="password"
          id="password"
          value={password}
          onClick={(e) => {
            setPassword(e.target.value);
          }}
          required
        />
      </form>
    </div>
  );
}

export default Login;
