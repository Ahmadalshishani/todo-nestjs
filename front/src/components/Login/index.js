import axios from "axios";
import React from "react";
import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [dis, setDis] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    axios
      .post("http://localhost:5000/user/login", {
        email: username,
        password: password,
      })
      .then((response) => {
        if (response) {
          localStorage.setItem("userId", response.data.user.id);
          localStorage.setItem("username", response.data.user.name);
          navigate("/")
        }
        console.log(response.data.user.id);
      })
      .catch((err) => {
        console.log(err, username, password);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <h3>Login</h3>
      <div>
        <p style={{ margin: "0" }}>Email</p>
        <input
          placeholder="Enter your email address"
          onChange={(e) => setUsername(e.target.value.replace(/\s+/g, ""))}
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
        onClick={login}
        style={{
          marginTop: "5px",
          maxWidth: "180px",
          width: "100%",
          backgroundColor: "greenyellow",
          borderRadius: "15px",
          cursor: "pointer",
        }}
      >
        Login
      </button>
      <p
        style={{
          color: "#0F3DDE",
          textAlign: "center",
          width: "100%",
          cursor: "pointer",
        }}
        onClick={() => {
          navigate("/register");
        }}
      >
        Signup
      </p>
    </div>
  );
};

export default Login;
