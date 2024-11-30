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
