import React, { useContext } from "react";
import Login from "../Component/Login";
import ".././App.css";
import SignUp from "../Component/SignUp";
import { AuthContext } from "../Context/AuthContextApi";
// import { useParams } from 'react-router-dom';

const Authentication = () => {
  const { authState } = useContext(AuthContext);

  // console.log(context);
  return (
    <div className="auth">
      <div>
        {/* <img src={logo} alt="" height="50"/> */}
        <span
          style={{
            color: "white",
            backgroundColor: "black",
            fontWeight: "700",
            fontSize: "3rem",
            padding: "5px 8px 8px 5px",
          }}
        >
          Be
        </span>
        <span
          style={{
            color: "white",
            fontSize: "2.5rem",
            marginLeft: "1rem",
            top: "-1rem",
          }}
        >
          Behance
        </span>
      </div>
      {authState.register ? <SignUp /> : <Login />}
      {/* <div>
      {action === 'login' && <Login />}
      {action === 'register' && <SignUp />}
      </div> */}
    </div>
  );
};

export default Authentication;
