import "./Navbar.css";
import { BiHome, BiLogOut, BiUser } from "react-icons/bi";
// import { RiServiceLine } from "react-icons/ri";
import { Link as ScrollLink } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteActiveUser, getActiveUser } from "../../LocalStorage";
import { RiServiceLine } from "react-icons/ri";
import { setToken } from "../../service/AuthService";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Local authentication state
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false); // Update auth state to logged out
    deleteActiveUser();
    setToken("");
    console.log("User logged out"); // For debugging
    navigate("/login"); // Redirect to login page
  };

  useEffect(() => {
    const currentActiveUser = getActiveUser();

    if (currentActiveUser) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar__container">
          <ul className="navbar__menu">
            <li className="navbar__item">
              <button
                className="navbar__button"
                onClick={() => navigate("/new-post")} // Navigate to new user post page
              >
                <BiUser className="navbar__icon" />
                {"\u00A0"}+ New Post
              </button>
              <button
                className="navbar__button"
                onClick={() => navigate("/new-ai-post")} // Navigate to new AI post page
              >
                <RiServiceLine className="navbar__icon" />
                {"\u00A0"}+ New AI Post
              </button>
            </li>

            <li>
              <button
                onClick={() => navigate("/")}
                className="navbar__logo home"
              >
                <BiHome className="navbar__icon" />
                {"\u00A0"}
                Home
              </button>
            </li>

            {/* Conditional Logout button */}
            {isLoggedIn && (
              <li className="navbar__item">
                <ScrollLink
                  to="#"
                  onClick={handleLogout}
                  className="navbar__logo"
                >
                  <BiLogOut className="navbar__icon" />
                  {"\u00A0"}Logout
                </ScrollLink>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
