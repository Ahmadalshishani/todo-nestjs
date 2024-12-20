import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { Navigate,useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const userName = localStorage.getItem("username");
  const [arr, setArr] = useState(null);
  const [newTodo, setNewTodo] = useState("");
  const [retay, setRetay] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/todos?userId=${userId}`)
      .then((response) => {
        console.log(response);
        setArr(response.data);
        console.log(arr);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [retay]);
  const addTodo = () => {
    axios
      .post("http://localhost:5000/todos", {
        userId: Number(userId),
        title: newTodo,
      })
      .then((response) => {
        console.log(response);
        setRetay(!retay);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const done = (id) => {
    console.log(id);

    axios
      .patch(`http://localhost:5000/todos/${id}`)
      .then((response) => {
        console.log(response);
        setRetay(!retay);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteTodo = (id) => {
    axios
      .delete(`http://localhost:5000/todos/${id}`)
      .then((response) => {
        console.log(response);
        setRetay(!retay);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {!userName && <Navigate to="/login" />}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h3>
          Welcom {userName} <br />{" "}
          <span
          onClick={()=>{
            localStorage.clear()
            navigate("/login")
            
          }}
            style={{
              color: "#ff0000",
              textAlign: "center",
              width: "100%",
              cursor: "pointer",
              fontSize: "15px",
            }}
          >
            Logout
          </span>{" "}
        </h3>{" "}
        {arr &&
          arr.map((element, index) => {
            return (
              <div
                style={{
                  height: "85px",
                  width: "200px",
                  border: "outset",
                  borderRadius: "15px",
                  margin: "5px",
                  backgroundColor: element.completed ? "#00cc00" : "#f2f2f2",
                  position: "relative",
                  cursor: "default",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "5px",
                  }}
                >
                  {element.title}
                  <button
                    onClick={() => {
                      done(element.id);
                    }}
                    style={
                      element.completed
                        ? { display: "none" }
                        : {
                            borderRadius: "5px",
                            backgroundColor: "greenyellow",
                            cursor: "pointer",
                          }
                    }
                  >
                    Complate?
                  </button>
                </div>
                {element.createdAt}
                <div
                  style={{ position: "absolute", bottom: "5px", right: "5px" }}
                >
                  <button
                    onClick={() => {
                      deleteTodo(element.id);
                    }}
                    style={{
                      borderRadius: "5px",
                      backgroundColor: "#ff8080",
                      cursor: "pointer",
                    }}
                  >
                    x
                  </button>
                </div>
              </div>
            );
          })}
        <div
          style={{
            height: "50px",
            width: "200px",
            border: "outset",
            borderRadius: "15px",
            margin: "5px",
            backgroundColor: "#f2f2f2",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            onChange={(e) => {
              setNewTodo(e.target.value);
            }}
            style={{
              width: "190px",
              borderRadius: "5px",
              backgroundColor: "#d9d9d9",
              borderColor: "#f2f2f2",
            }}
          ></input>
          <button
            onClick={addTodo}
            style={{
              width: "195px",
              borderRadius: "5px",
              backgroundColor: "#d9d9d9",
              borderColor: "#f2f2f2",
              cursor: "pointer",
            }}
          >
            Add todo
          </button>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
