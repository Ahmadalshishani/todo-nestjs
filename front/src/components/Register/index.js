import axios from "axios";
import React from "react";
import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [dis, setDis] = useState(true);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
  
  const register = ()=>{
      axios
      .post("http://localhost:5000/user/register",{name:username ,email:email,password:password})
      .then((response)=>{
        if(response){
         navigate("/login")
          
        }
          
      })
      .catch((err)=>{
          console.log(err,username,password);
          
      })
  }
  
  
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <h3>Register</h3>
        <div>
          <p style={{ margin: "0" }}>Name</p>
          <input
            placeholder="Enter your name"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>
        <div>
          <p style={{ margin: "0" }}>Email</p>
          <input
            placeholder="Enter your email address"
            onChange={(e) => setEmail(e.target.value.replace(/\s+/g, ""))}
          ></input>
        </div>
        <div style={{ position: "relative" }}>
          <p style={{ margin: "0" }}>Password</p>
          <input
            placeholder="Enter your password"
            type={dis ? "password" : "text"}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <span
            style={{
              height: "20px",
              width: "20px",
              position: "absolute",
              top: "24px",
              right: "0",
            }}
            onClick={() => {
              setDis(!dis);
            }}
          >
            {" "}
            {dis ? <FaEye /> : <FaEyeSlash />}
          </span>
        </div>
        <button
        onClick={register}
        
          style={{
            marginTop: "5px",
            maxWidth: "180px",
            width: "100%",
            backgroundColor: "greenyellow",
            borderRadius: "15px",
            cursor:"pointer"
          }}
        >
          Signup
        </button>
        <p
          style={{
            color: "#0F3DDE",
            textAlign: "center",
            width: "100%",
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </p>
      </div>
    );
  };

export default Register
