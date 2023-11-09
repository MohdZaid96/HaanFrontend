import React, { useState, useContext } from "react";
import "../Styles/login.css";
import { useNavigate } from "react-router";
import axios from "axios";
import { AuthContext } from "../Context/AuthContextApi";
// const url = `https://agreeable-rose-rugby-shirt.cyclic.cloud/users`;

const SignUp = () => {
  const navigate = useNavigate();
  // const [user, setUser] = useState({ name: "", password: "", email: "" });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  
  const [error, setError] = useState("");
  const { authState, setAuthState } = useContext(AuthContext);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (user.email && user.password && user.name) {
  //     try {
  //       const res = await axios.post(`https://agreeable-rose-rugby-shirt.cyclic.cloud/signup`).then((response) => {
  //         const data = response.data;
  //         if (data.length === 0) {
  //           axios
  //             .post(url, { ...user })
  //             .then((res) => {
  //               console.log(res);
  //               setError("User Registered Successfully");
  //               // navigate(`/login`);
  //               setAuthState({ ...authState, register: false });
  //             })
  //             .catch((error) => {
  //               console.error("Error sending data:", error);
  //             });
  //         } else {
  //           setError("User Already Registered");
  //         }
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (user.email && user.password && user.name) {
      try {
        const {data}=await axios.get(`https://agreeable-rose-rugby-shirt.cyclic.cloud/user`);
        // console.log(data);
        const exist=data.filter((ele)=>{
          return ele.email===email;
        })
        // console.log(exist)

        if(exist.length===1){
          setError("User Already Registered");
        }else{
          try {
            const res = await axios.post(`https://agreeable-rose-rugby-shirt.cyclic.cloud/signup`,{name,email,password});
            if(res){
              setError("User Registered Successfully");
              navigate(`/login`);
              setAuthState({ ...authState, register: false });
  
            }

          } catch (error) {
           console.log(error);
          }
          
          
        }
        
      } catch (error) {
        console.log(error);
      }





        //   if (data.length === 0) {
        //     axios
        //       .post(url, { ...user })
        //       .then((res) => {
        //         console.log(res);
        //         setError("User Registered Successfully");
        //         // navigate(`/login`);
        //         setAuthState({ ...authState, register: false });
        //       })
        //       .catch((error) => {
        //         console.error("Error sending data:", error);
        //       });
        //   } else {
        //     setError("User Already Registered");
        //   }
        // });
      
    }
  ;

  // const handleMail = (e) => {
  //   const value = e.target.value;
  //   if (value) setUser({ ...user, email: value });
  // };

  // const handlePass = (e) => {
  //   const value = e.target.value;
  //   if (value) setUser({ ...user, password: value });
  // };

  // const handleName = (e) => {
  //   const value = e.target.value;
  //   if (value) setUser({ ...user, name: value });
  // };

  return (
    <div className="sign-up">
      <h1>Sign Up</h1>
      <div>
        <span>Already Registered?</span>
        <button
          onClick={() => {
            setAuthState({ ...authState, register: false });
          }}
        >
          Login here
        </button>
        {/* <Link to={} */}
        {error ? <p>{error}</p> : <></>}
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Your Email Address"
          onChange={(e) =>setEmail(e.target.value)}
        />

        <input type="text" placeholder="Create Password" />

        <input
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <input type="submit" value="Submit" />
      </form>
      <div style={{ display: "flex", gap: "1rem" }}>
        <hr />
        <span>Or</span>
        <hr />
      </div>
      <div className="icons">
        <a className="fa fa-google " href="#"></a>
        <a className="fa fa-facebook" href="#"></a>
        <a className="fa fa-twitter" href="#"></a>
      </div>
    </div>
  );
};

export default SignUp;
