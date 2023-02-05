import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Exemption() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState([]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    console.log(event.target.value);
  };

  const handleSubmit = (event) => {
    console.log("pressed");
    event.preventDefault();
    axios
      .post("http://localhost:81/credit_automation/exemption.php", inputs)
      .then(function (response) {
        console.log(response.data);
        navigate("/addcourse");
      });
  };
  return (
    <form className="w-full max-w-lg" onSubmit={handleSubmit}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="roll"
          >
            Roll Number
          </label>
          <input
            className="appearance-none block w-full bg-pLC text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-roll"
            name="roll"
            type="text"
            placeholder="20CSR020"
            onChange={handleChange}
          />
        </div>
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="sem"
          >
            Semester
          </label>
          <input
            className="appearance-none block w-full bg-pLC text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-sem"
            type="text"
            name="sem"
            placeholder="VII"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="courses"
          >
            Course name to exempt:
          </label>
          <input
            className="appearance-none block w-full bg-pLC text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-courses"
            type="text"
            name="courses"
            placeholder="Academic course"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full  px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="credit"
          >
            Credit course:
          </label>
          <input
            className="appearance-none block w-full bg-pLC text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-credit"
            type="text"
            name="credit"
            placeholder="Credit course"
            onChange={handleChange}
          />
        </div>

        <div className="md:w-full ">
          <button
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </div>
    </form>
  );
}

export default Exemption;
