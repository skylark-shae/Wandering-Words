import React, { useEffect, useState } from "react";
import { addNewUser, getActiveUser, isUserAlreadyRegistered } from "../../LocalStorage";
import { Link, useNavigate } from "react-router-dom";
import { IUserModel } from "../../model/Auth";
import { registerUser } from "../../service/AuthService";
import "./Register.css";

const defaultData: IUserModel = {
  email: "",
  username: "",
  password: "",
};

const Register = () => {
  const [data, setData] = useState<IUserModel>(defaultData);

  const [message, setMessage] = useState<string>("");
  const navigate = useNavigate();
  useEffect(() => {
    const activeUser = getActiveUser();

    if (activeUser) {
      navigate("/")
    }
  }, [])
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const id = event.target.id;
    const value = event.target.value;
    setData({ ...data, [id]: value });
    setMessage("");
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //          if one of the forms was left blank, display message
    if (data.email === "" || data.username === "" || data.password === "") {
      setMessage("Please fill out all sections of the form.");
      return;
    }

    try {
      const result = await registerUser(data);
      if (result.status === 201) {
        setData(defaultData);
        setMessage("User registered, Click on login.");
      } else {
        alert("Error registering new user");
      }
      console.log(result);
    } catch (error) {
      console.log(error);
      // alert(`Error`); we do not need this extra aleart
    }
    // Call the API, to register new user

    //          if email ID already exists, display message
    if (isUserAlreadyRegistered(data.username)) {
      setMessage("User already exists.");
      return;
    }
    //          save new user in local storage
    addNewUser(data);
    setMessage("User created please click the link to");
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
        <div className="social">{message && <p>{message}</p>}</div>
        <Link to="/Login">Login</Link>
        {/* TODO: add a hover effect to make the text larger. also add an underline to the link, to help others realize it is a link */}
      </form>
    </>
  );
};
export default Register;
