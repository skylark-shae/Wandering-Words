import { useState } from "react";
import { addNewUser, isUserAlreadyRegistered } from "../LocalStorage";
import { Link } from "react-router-dom";

interface IUserModel {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}

const Register = () => {
  const [data, setData] = useState<IUserModel>({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });

  const [message, setMessage] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const id = event.target.id;
    const value = event.target.value;

    setData({ ...data, [id]: value });
    setMessage("");
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //          if one of the forms was left blank, display message
    if (
      data.firstName === "" ||
      data.lastName === "" ||
      data.username === "" ||
      data.password === ""
    ) {
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
    setMessage("User created. Click on Login.  ");
    setData({
      firstName: "",
      lastName: "",
      username: "",
      password: "",
    });
  };

  return (
    <>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={handleFormSubmit}>
        <h3>Sign Up Now!</h3>

        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          placeholder="First Name"
          id="firstName"
          value={data.firstName}
          onChange={handleInputChange}
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          placeholder="Last Name"
          id="lastName"
          value={data.lastName}
          onChange={handleInputChange}
        />

        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Email or Phone"
          id="username"
          value={data.password}
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

        <button>Sign Up</button>
        <div className="social">
          {message && <p>{message}</p>}
          <Link to="/login">Login</Link>
        </div>
      </form>
    </>
  );
};
export default Register;
