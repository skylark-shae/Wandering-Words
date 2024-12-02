import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ILoginModel } from "../../model/Auth";
import { getTokenData, login, setToken } from "../../service/AuthService";
import "./Login.css";
import { getUser } from "../../service/UserService";
import { getActiveUser, updateActiveUser } from "../../LocalStorage";

const Login = () => {
  const [data, setData] = useState<ILoginModel>({ username: "", password: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const activeUser = getActiveUser();

    if (activeUser) {
      navigate("/");
    }
  }, []);

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
        console.log(result, "hi");
        setToken(result.data.accessToken);
        const tokenData = getTokenData();

        try {
          if (tokenData) {
            console.log(tokenData);
            const result = await getUser(tokenData?.id);
            setData(result.data);
            updateActiveUser(result.data);
          }
        } catch (error) {
          console.log(error);
        }
        navigate("/");
        console.log("should be navigating");
      } else {
        alert("Error in login.");
      }
    } catch (error) {
      alert("Error in login.");
    }
  };

  return (
    <>
      <div className="login-page">
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
      </div>
    </>
  );
};

export default Login;
