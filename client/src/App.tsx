import { BrowserRouter as Router, Navigate, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";

// Import components
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import ContactForm from "./components/ContactForm";
import FeedbackForm from "./components/FeedbackForm";
import NewPostPage from "../src/pages/NewPost.tsx"; // Assuming this file exists
import { getActiveUser } from "./LocalStorage";

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar should be inside Router for consistent navigation behavior */}
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/feedback" element={<FeedbackForm />} />
        
        {/* Private routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/new-post" element={<NewPostPage />} />
        </Route>

        {/* Catch-all route for undefined paths (optional) */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

// Private route component
const PrivateRoute = () => {
  const activeUser = getActiveUser();
  return activeUser ? <Outlet /> : <Navigate to="/login" />;
};

export default App;

// Previous code before combining 
// import { BrowserRouter, Navigate, Outlet, Route, Routes, } from "react-router-dom";
// import "./App.css";
// import Login from "./components/Login/Login";
// import Register from "./components/Register/Register";
// import Home from "./components/Home/Home";
// import { getActiveUser } from "./LocalStorage";
// import Navbar from "./components/Navbar/Navbar";
// import FeedbackForm from "./components/FeedbackForm";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import NewPost from './pages/NewPost';
// import HomePage from './pages/Home.tsx'; // Example existing page


// import "./App.css";
// import Login from "./components/login";
// import Register from "./components/Register";
// import Home from "./components/Home";
// import ContactForm from "./components/ContactForm"; // Import the ContactForm component
// import { getActiveUser } from "./LocalStorage";
// import Navbar from "./components/Navbar/Navbar";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <BrowserRouter>
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/" element={<PrivateRoute />} />ç
//           <Route path="/" element={<Home />} />
//           <Route path="/contact" element={<FeedbackForm />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// const PrivateRoute = () => {
//   const activeUser = getActiveUser();
//   if (activeUser === null) return <Navigate to={"/login"} />;

//   return <Outlet />;
// };

// // New Contact route (public)
// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/new-post" element={<NewPostPage />} />
//       </Routes>
//     </Router>
//   );
// }

// // Skylark Changes for FeedbackForm 
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
