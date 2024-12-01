import { useEffect, useState } from "react";
import { deleteActiveUser, getActiveUser } from "../../LocalStorage";
import { getUser } from "../../service/UserService";
import { useNavigate } from "react-router";
import "./Home.css";
import { getTokenData, setToken } from "../../service/AuthService";
import { IUserResponse } from "../../model/Auth";

const Home = () => {
  const [data, setData] = useState<IUserResponse>({
    id: "",
    email: "",
    username: "",
    password: "",
  });
  // const [activeUser, setActiveUser] = useState<IUserModel>();
  const navigate = useNavigate();

  useEffect(() => {
    // const data = getActiveUser();
    const fetchUserData = async () => {
      const tokenData = getTokenData();
      console.log("hi", tokenData);
      if (tokenData === null) {
        console.log("Going back to the login component.");
        navigate("/Login");
        return;
      }
      try {
        if (tokenData) {
          console.log(tokenData);
          const result = await getUser(tokenData?.id);
          console.log(result);
          setData(result.data);
        }
      } catch (error) {
        navigate("/Login");
        console.log("Going back to the login catch");
        return;
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    setToken("");

    navigate("/Login");
  };

  return (
    <>
      <div className="greeting-message">Welcome {data.username}</div>;
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </>
  );
};

export default Home;

// Skylark Changes for FeedbackForm
// import { useEffect, useState } from "react";
// import { deleteActiveUser, getActiveUser, IUserModel } from "../LocalStorage"; // Ensure getActiveUser is imported
// import { useNavigate } from "react-router-dom"; // Missing import

// const Home = () => {
//   const [activeUser, setActiveUser] = useState<IUserModel | null>(null); // Fix: useState
//   const navigate = useNavigate();

//   useEffect(() => {
//     const data = getActiveUser();
//     if (data === null) {
//       navigate("/login");
//     } else {
//       setActiveUser(data);
//     }
//   }, [navigate]);

//   const handleLogout = () => {
//     deleteActiveUser();
//     navigate("/login");
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px", color: "white" }}>
//       <h1>Welcome {activeUser?.name}</h1>
//       <button onClick={handleLogout} style={styles.button}>Logout</button>
//       <div style={{ marginTop: "20px" }}>
//         <button onClick={() => navigate("/contact")} style={styles.button}>
//           Contact Us
//         </button>
//       </div>
//     </div>
//   );
// };

// // Inline styles for simplicity
// const styles = {
//   button: {
//     backgroundColor: "#4CAF50",
//     color: "white",
//     padding: "10px 20px",
//     fontSize: "1em",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//     margin: "5px",
//   },
// };

// export default Home;
