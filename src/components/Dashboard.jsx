import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [storedToken, setStoredToken] = useState();

  const checkToken = async (e) => {
    e.preventDefault();
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
    }
  };

  console.log(storedToken);
  return (
    <div>
      <button onClick={() => checkToken()}>
        Click to login to your profile
      </button>
    </div>
  );
}

export default Dashboard;
