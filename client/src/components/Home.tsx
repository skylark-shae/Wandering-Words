import { useEffect, useState } from "react";
import { deleteActiveUser, IUserModel } from "../LocalStorage";

const Home = () => {
  const [activeUser, setActiveUser] = userState<IUserModel>();
  const navigate = useNavigate();

  useEffect(() => {
    const data = getActiveUser();
    if (data === null) {
      navigate("/login");
    }

    setActiveUser(data);
  }, []);

  const handleLogout = () => {
    deleteActiveUser();
    navigate("/login");
  };

  return (
    <>
      <div style={{ color: "white" }}>Welcome {activeUser?.name}</div>;
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Home;
