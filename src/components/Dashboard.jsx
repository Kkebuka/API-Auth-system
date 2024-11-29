import React, { useState } from "react";

function Dashboard() {
  const [storedToken, setStoredToken] = useState();

  const checkToken = () => {
    const storedToken = localStorage.getItem("token");
    setStoredToken("storedToken");
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
