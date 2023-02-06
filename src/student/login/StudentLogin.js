import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function StudentLogin() {
  const navigate = useNavigate();
  // const [name, setName] = useState("");
  // const [password, setPassword] = useState("");
  // async function handleSubmit() {
  //   if (name.length === 0) {
  //     alert("name is empty");
  //   } else if (password.length === 0) {
  //     alert("password is empty");
  //   } else {
  //     const url = "http://localhost:81/credit_automation/studentLogin.php";
  //     let fData = new FormData();
  //     fData.append("name", name);
  //     fData.append("password", password);
  //     console.log(fData);
  //     await axios
  //       .post(url, fData)
  //       .then((response) => {
  //         console.log(response);
  //         // if (response) {
  //         //   navigate("/StudentHome");
  //         // }
  //       })
  //       .catch((error) => alert(error));
  //   }
  // }
  // const handleName = (event) => {
  //   event.persist();
  //   setName(event.target.value);
  // };
  // const handlePass = (event) => {
  //   event.persist();
  //   setPassword(event.target.value);
  // };
  const [inputs, setInputs] = useState([]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    axios
      .post("http://localhost:81/credit_automation/studentLogin.php", inputs)
      .then(function (response) {
        if (response.data.length === 0) {
          alert("invalid");
        } else {
          console.log(response.data[0]["studentName"]);
          navigate("/studenthome", {
            state: {
              current_user: response.data[0]["studentName"],
            },
          });
        }
      });
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
              onChange={handleChange}
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
              onChange={handleChange}
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <a href="#/" className="text-xs text-purple-600 hover:underline">
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
          <a href="#/" className="font-medium text-purple-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default StudentLogin;
