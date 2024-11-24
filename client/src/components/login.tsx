import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUser, updateActiveUser } from "../LocalStorage";

interface ILoginModel {
  username: string;
  password: string;
}

const Login = () => {
  const [data, setData] = useState<ILoginModel>({ username: "", password: "" });

  const navigate = useNavigate();
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const id = event.target.id;
    const value = event.target.value;

    setData({ ...data, [id]: value });
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (data.username === "" || data.password === "") {
      alert("Please fill out the form.");
    }

    const user = getUser(data.username, data.password);
    if (user === null) {
      alert("Username or Password is not correct.");
      return;
    }

    updateActiveUser(user);
    navigate("/");
  };

  return (
    <>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={handleFormSubmit}>
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

        <button>Log In</button>
        <div className="social">
          <Link to="/register">Register</Link>
        </div>
      </form>
    </>
  );
};

export default Login;
