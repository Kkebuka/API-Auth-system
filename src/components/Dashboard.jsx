import React, { useState } from "react";
import axios from "axios";
import Login from "./Login";

function Dashboard() {
  const [storedToken, setStoredToken] = useState();
  const [expiredToken, setExpiredToken] = useState(false);

  const checkToken = async (e) => {
    // e.preventDefault();
    const token = localStorage.getItem("access_token");
    setStoredToken(token);

    try {
      const response = await axios.post(
        "",
        {},
        {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log("error", error);
      if (error.response.status === 401) {
        setExpiredToken(true);
      }
    }
  };

  console.log(storedToken);
  return (
    <div>
      {!expiredToken && (
        <button onClick={() => checkToken()}>
          Click to login to your profile
        </button>
      )}
      {expiredToken && <Login />}
    </div>
  );
}

export default Dashboard;
