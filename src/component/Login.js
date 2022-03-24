import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = () => {
    let data = {
      email: email,
      password: password,
    };
  };
  axios({
    method: "POST",
    url: "https://reqres.in/api/login",
  })
    .then((res) => {
      console.log(res.data);
      window.localStorage.setItem("token", res.data.token);
      history.push("/");
    })
    .catch((err) => {});

  console.log(email, password);
  return (
    <div className="card w-50 mx-auto my-3 bg-info">
      <div className="card-body">
        <h3 className="text-center">Login</h3>
        <input
          type="text"
          className="form-control my-3"
          placeholder="Enter your Email"
          onChange="(e)=> handleEmail(e)"
        />

        <input
          type="text"
          className="form-control my-3"
          placeholder="Enter your Password"
          onChange="(e)=> handlePassword(e)"
        />

        <div className="text-center">
          <button className="btn btn-warning" onClick={handleSubmit}>
            SIGN IN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
