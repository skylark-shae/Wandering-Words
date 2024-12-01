import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUser, updateActiveUser } from "../../LocalStorage";
import { ILoginModel } from "../../model/Auth";
import { login, setToken } from "../../service/AuthService";
import "./Login.css";

const Login = () => {
  const [data, setData] = useState<ILoginModel>({ username: "", password: "" });
  const navigate = useNavigate();
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const id = event.target.id;
    const value = event.target.value;

    setData({ ...data, [id]: value });
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (data.username === "" || data.password === "") {
      alert("Please fill out the form completely.");
    }

    try {
      const result = await login(data);
      if (result.status === 200) {
        console.log(result);
        setToken(result.data.accessToken);
        navigate("/");
      } else {
        alert("Error in login.");
      }
    } catch (error) {
      alert("Error in login.");
    }

    // const user = getUser(data.username, data.password);
    // if (!user) {
    //   alert("Username or Password is not correct.");
    //   return;
    // }

    // updateActiveUser(user);
    navigate("/");
  };

  return (
    <>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={handleFormSubmit} className="login-form">
        <h3>Login Here</h3>

        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Email or Phone"
          id="username"
          value={data.username}
          onChange={handleInputChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={data.password}
          onChange={handleInputChange}
        />

        <button className="login-button">Log In</button>
        <div className="social">
          <Link to="/register">Register</Link>
        </div>
      </form>
    </>
  );
};

export default Login;
