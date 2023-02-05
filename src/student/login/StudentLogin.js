import React, { useState } from "react";
import axios from "axios";
import StudentHome from "../StudentHome.js";

import { useNavigate } from "react-router-dom";
function StudentLogin() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    if (name.length === 0) {
      alert("name is empty");
    } else if (password.length === 0) {
      alert("password is empty");
    } else {
      const url = "http://localhost:81/credit_automation/studentLogin.php";
      let fData = new FormData();
      fData.append("name", name);
      fData.append("password", password);
      axios
        .post(url, fData)
        .then((response) => navigate("/StudentHome"))
        .catch((error) => alert(error));
    }
  };
  const handleName = (event) => {
    event.persist();
    console.log(event.target.value);
    // setValues((values) => ({
    //   ...values,
    //   name: event.target.value,
    // }));
    setName(event.target.value);
  };
  const handlePass = (event) => {
    event.persist();
    console.log(event.target.value);
    // setValues((values) => ({
    //   ...values,
    //   password: event.target.value,
    // }));
    setPassword(event.target.value);
  };
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
          Log in
        </h1>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label
              htmlFor="username"
              className="block text-sm font-semibold text-gray-800"
            >
              name
            </label>
            <input
              name="username"
              type="text"
              onChange={handleName}
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              name="password"
              type="password"
              onChange={handlePass}
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <a href="#" className="text-xs text-purple-600 hover:underline">
            Forget Password?
          </a>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
            >
              Login
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Don't have an account?{" "}
          <a href="#" className="font-medium text-purple-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default StudentLogin;
