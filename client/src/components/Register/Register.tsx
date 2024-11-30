import React, { useState } from "react";
import { addNewUser, isUserAlreadyRegistered } from "../../LocalStorage";
import { Link } from "react-router-dom";
import "./Register.css";
interface IUserModel {
  email: string;
  username: string;
  password: string;
}

const Register = () => {
  const [data, setData] = useState<IUserModel>({
    email: "",
    username: "",
    password: "",
  });

  const [message, setMessage] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const id = event.target.id;
    const value = event.target.value;
    console.log(id, value);

    setData({ ...data, [id]: value });
    setMessage("");
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //          if one of the forms was left blank, display message
    if (data.email === "" || data.username === "" || data.password === "") {
      setMessage("Please fill out all sections of the form.");
      return;
    }

    //          if email ID already exists, display message
    if (isUserAlreadyRegistered(data.username)) {
      setMessage("User already exists.");
      return;
    }
    //          save new user in local storage
    addNewUser(data);
    setMessage("User created.");
    setData({
      email: "",
      username: "",
      password: "",

      //user email password
    });
  };

  return (
    <>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form className="register-form" onSubmit={handleFormSubmit}>
        <h3>Sign Up Now!</h3>

        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="Create your email"
          id="email"
          value={data.email}
          onChange={handleInputChange}
        />

        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Set your username"
          id="username"
          value={data.username}
          onChange={handleInputChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Create your password"
          id="password"
          value={data.password}
          onChange={handleInputChange}
        />

        <button className="register-button">Sign Up</button>
        <div className="social">
          {message && <p>{message}</p>}
          {"\u00A0"}
          <Link to="/Login">Login</Link>
        </div>
      </form>
    </>
  );
};
export default Register;
