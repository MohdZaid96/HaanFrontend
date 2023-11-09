import React, { useState, useContext } from "react";
import "../Styles/login.css";
import { useNavigate } from "react-router";
import axios from "axios";
import { AuthContext } from "../Context/AuthContextApi";
const url = `https://agreeable-rose-rugby-shirt.cyclic.cloud/user`;

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { authState, login, setAuthState } = useContext(AuthContext);


  const handleSubmit = async (e) => {
    e.preventDefault();

    
      try {
        axios.post(`https://agreeable-rose-rugby-shirt.cyclic.cloud/login`,{email,password}).then((response) => {
          
          console.log(response);
        //   if (data.length !== 0) {
            if (response.data.token) {
              login(response.data.data);
              localStorage.setItem("userEmail",email);
              navigate(`/`);
            } else {
              setAuthState({
                ...authState,
                isAuth: false,
                error: "Invalid Password",
              });
            }
        //   } else {
        //     setAuthState({
        //       ...authState,
        //       isAuth: false,
        //       error: "User not found",
        //     });
        //   }
        });
      } catch (error) {
        console.log(error);
      }
    
  };

  // const handleMail = (e) => {
  //   const value = e.target.value;
  //   if (value) setUser({ ...user, mail: value });
  // };

  // const handlePass = (e) => {
  //   const value = e.target.value;
  //   if (value) setUser({ ...user, password: value });
  // };

  return (
    <div className="login">
      <h1>Sign In</h1>
      <div>
        <span>New User?</span>
        <button
          onClick={() => {
            setAuthState({ ...authState, register: true });
          }}
        >
          Register here
        </button>
        {authState.error ? (
          <p style={{ color: "red" }}>{authState.error}</p>
        ) : (
          <></>
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="Enter Your Email address"
            onChange={(e) =>setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder="Enter Your Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
      <div style={{ display: "flex", gap: "1rem" }}>
        <hr />
        <span>Or</span>
        <hr />
      </div>
      <div className="icons">
        <a className="fa fa-google  "href="#"></a>
        <a className="fa fa-facebook" href="#"></a>
        <a className="fa fa-twitter" href="#"></a>
      </div>
    </div>
  );
};

export default Login;
