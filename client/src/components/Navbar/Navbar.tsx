import "./Navbar.css";
import { BiHome, BiUser, BiLogIn, BiLogOut } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { Link as ScrollLink } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Local authentication state
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false); // Update auth state to logged out
    console.log("User logged out"); // For debugging
    navigate("/login"); // Redirect to login page
  };

  // Function to handle login (for demonstration purposes)
  const handleLogin = () => {
    setIsLoggedIn(true); // Update auth state to logged in
    console.log("User logged in"); // For debugging
    navigate("/"); // Redirect to home page after login
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <ul className="navbar__menu">
          {/* Home link */}
          <li>
            <ScrollLink to="home" smooth={true} duration={500} offset={-80} className="navbar__logo">
              <BiHome className="navbar__icon" />
              Home
            </ScrollLink>
          </li>

          {/* About link */}
          {/* <li className="navbar__item">
            <ScrollLink to="about" smooth={true} duration={500} offset={-80} className="navbar__links">
              <BiUser className="navbar__icon" />
              About
            </ScrollLink>
          </li> */}

          {/* Add New Post button */}
          <li>
            <ScrollLink to="NewPostPage" smooth={true} duration={500} offset={-80} className="navbar__logo">
              <BiUser className="navbar__icon" />
              + New Post
            </ScrollLink>
          </li>

          {/* Add New AI Post button */}
          <li>
            <ScrollLink to="NewAIPostPage" smooth={true} duration={500} offset={-80} className="navbar__logo">
              <RiServiceLine className="navbar__icon" />
              + New AI Post
            </ScrollLink>
          </li>

          {/* Conditional Logout link */}
          {isLoggedIn && (
            <li className="navbar__item">
              <ScrollLink to="#" onClick={handleLogout} className="navbar__logo">
                <BiLogOut className="navbar__icon" /> Logout
              </ScrollLink>
            </li>
          )}

          {/* Conditional Login link */}
          {!isLoggedIn && (
            <li className="navbar__item">
              <ScrollLink to="#" onClick={handleLogin} className="navbar__logo">
                <BiLogIn className="navbar__icon" /> Login
              </ScrollLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;



// Copy of code from 11/30/2024 push to main branch.
// import "./Navbar.css";
// import {
//   BiHome,
//   BiUser,
//   BiCodeCurly,
//   BiSolidBook,
//   BiMessageSquareDetail,
// } from "react-icons/bi";
// import { RiServiceLine } from "react-icons/ri";
// import { Link } from "react-scroll";
// // import { Link } from 'react-router-dom'; // From original code.

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="navbar__container">
//         <ul className="navbar__menu">
//           <li>
//             <Link
//               to="home"
//               smooth={true}
//               duration={500}
//               spy={true}
//               exact="true"
//               offset={-80}
//               className="navbar__logo"
//             >
//               <BiHome className="navbar__icon" />
//               Home
//             </Link>
//           </li>
//           <li className="navbar__item">
//             <Link
//               to="about"
//               smooth={true}
//               duration={500}
//               spy={true}
//               exact="true"
//               offset={-80}
//               className="navbar__links"
//             >
//               <BiUser className="navbar__icon" />
//               About
//             </Link>
//           </li>
//           <li className="navbar__item">
//             <Link
//               to="services"
//               smooth={true}
//               duration={500}
//               spy={true}
//               exact="true"
//               offset={-80}
//               className="navbar__links"
//             >
//               <RiServiceLine className="navbar__icon" />
//               Services
//             </Link>
//           </li>
//           <li className="navbar__item">
//             <Link
//               to="skills"
//               smooth={true}
//               duration={500}
//               spy={true}
//               exact="true"
//               offset={-80}
//               className="navbar__links"
//             >
//               <BiCodeCurly className="navbar__icon" />
//               Skills
//             </Link>
//           </li>
//           <li className="navbar__item">
//             <Link
//               to="projects"
//               smooth={true}
//               duration={500}
//               spy={true}
//               exact="true"
//               offset={-80}
//               className="navbar__links"
//             >
//               <BiSolidBook className="navbar__icon" />
//               Projects
//             </Link>
//           </li>
//           <li className="navbar__item">
//             <Link
//               to="contact"
//               smooth={true}
//               duration={500}
//               spy={true}
//               exact="true"
//               offset={-80}
//               className="navbar__links"
//             >
//               <BiMessageSquareDetail className="navbar__icon" />
//               Contact
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;