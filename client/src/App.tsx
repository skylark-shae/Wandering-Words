import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import Login from "./components/login";
import Register from "./components/Register";
import Home from "./components/Home";
import { getActiveUser } from "./LocalStorage";
import Navbar from "./components/Navbar/Navbar";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<PrivateRoute />} />ç
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

const PrivateRoute = () => {
  const activeUser = getActiveUser();
  if (activeUser === null) return <Navigate to={"/login"} />;

  return <Outlet />;
};

export default App;


// Skylark Changes for FeedbackForm
// import {
//   BrowserRouter,
//   Navigate,
//   Outlet,
//   Route,
//   Routes,
// } from "react-router-dom";
// import "./App.css";
// import Login from "./components/login";
// import Register from "./components/Register";
// import Home from "./components/Home";
// import ContactForm from "./components/ContactForm"; // Import the ContactForm component
// import { getActiveUser } from "./LocalStorage";
// import Navbar from "./components/Navbar/Navbar";

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar /> {/* Moved inside BrowserRouter for better routing behavior */}
//       <Routes>
//         {/* Public routes */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />

//         {/* Private route */}
//         <Route element={<PrivateRoute />}>
//           <Route path="/" element={<Home />} />
//         </Route>

//         {/* New Contact route (public) */}
//         <Route path="/contact" element={<ContactForm />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// const PrivateRoute = () => {
//   const activeUser = getActiveUser();
//   if (activeUser === null) return <Navigate to="/login" />;

//   return <Outlet />;
// };

// export default App;
