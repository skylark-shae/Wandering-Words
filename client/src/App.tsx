import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { isTokenValid } from "./service/AuthService";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<Home />}></Route>
          </Route>
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

const PrivateRoute = () => {
  if (!isTokenValid()) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default App;
