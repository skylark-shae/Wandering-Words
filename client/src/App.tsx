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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<PrivateRoute />} />ç
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

const PrivateRoute = () => {
  const activeUser = getActiveUser();
  if (activeUser === null) return <Navigate to={"/login"} />;

  return <Outlet />;
};

export default App;
