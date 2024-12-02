import { BrowserRouter as Router, Navigate, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";

// Import components
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/login.tsx"; // Error in file name
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import ContactForm from "./components/ContactForm";
import FeedbackForm from "./components/FeedbackForm";
import NewPostPage from "../src/pages/NewPost.tsx"; // Assuming this file exists
import { getActiveUser } from "./LocalStorage";
import Article from "./components/Article/Article.tsx";
import AIArticle from "./components/AIArticle/AIArticle.tsx";
import NewAIPostPage from "./components/NewAIPost/NewAIPost.tsx"; // Error in file name

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
          <Route path="/new-ai-post" element={<NewAIPostPage />} />
          <Route path="/post/:id" element={<Article />}/>
          <Route path="/ai-post/:id" element={<AIArticle />}/>
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