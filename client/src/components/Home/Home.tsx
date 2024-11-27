import { useEffect, useState } from "react";
import { deleteActiveUser, IUserModel } from "../../LocalStorage";
import "./Home.css";

const Home = () => {
  const [activeUser, setActiveUser] = userState<IUserModel>();
  const navigate = useNavigate();

  useEffect(() => {
    const data = getActiveUser();
    if (data === null) {
      navigate("/Login");
    }

    setActiveUser(data);
  }, []);

  const handleLogout = () => {
    deleteActiveUser();
    navigate("/Login");
  };

  return (
    <>
      <div style={{ color: "white" }}>Welcome {activeUser?.name}</div>;
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Home;
