import React, { useEffect, useState } from "react";
import axios from "axios";
import Login from "./Login";

function Dashboard() {
  const [storedToken, setStoredToken] = useState();
  const [expiredToken, setExpiredToken] = useState(false);
  const [profile, setProfile] = useState("");
  const [loading, setLoading] = useState(true);

  const checkToken = async (e) => {
    // e.preventDefault();
    const token = localStorage.getItem("access_token");
    setStoredToken(token);
    console.log(token);

    try {
      const response = await axios.get("https://dummyjson.com/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProfile(response.data);
      console.log(response);
    } catch (error) {
      console.log("error", error);
      if (error.response.status === 401) {
        setExpiredToken(true);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  //   checkToken();
  if (loading) {
    return <h4>Loading.....</h4>;
  }

  const handleLogout = () => {
    setStoredToken(null);
  };
  console.log(storedToken);
  return (
    <div>
      {!expiredToken && (
        <div>
          <img src="" alt="" />
          <h4>Welcome </h4>
          {console.log(profile)}
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
      {expiredToken && <Login loading={loading} setLoading={setLoading} />}
    </div>
  );
}

export default Dashboard;
