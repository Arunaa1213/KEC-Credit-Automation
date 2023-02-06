import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
function AddCourse(state) {
  const navigate = useNavigate();
  const location = useLocation();
  const [inputs, setInputs] = useState([]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    inputs["email"] = location.state.user_email;
    axios
      .post(
        "http://localhost:81/KEC-Credit-Automation-DB/addcourse.php",
        inputs
      )
      .then(function (response) {
        console.log(response.data);
        navigate("/addcourse");
      });
  };

  //   const staff_email = location.state.user_email;
  return (
    <div className="text-pC max-w-lg">
      <div className="flex flex-col items-center mt-4 font-extrabold">
        <h2>ADD COLLEGE OFFERING COURSES</h2>
      </div>
      <form className="max-w-lg" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="name"
            >
              Course Name
            </label>
            <input
              required
              name="name"
              onChange={handleChange}
              className="appearance-none block w-full bg-pLC border border-pLC rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-pMC"
              id="name"
              type="text"
              placeholder=""
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="code"
            >
              Course Code
            </label>
            <input
              required
              name="code"
              onChange={handleChange}
              className="appearance-none block w-full bg-pLC border border-pLC rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-pMC"
              id="code"
              type="text"
              placeholder=""
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="year"
            >
              For Which Year
            </label>
            <div className="relative">
              <select
                name="year"
                onChange={handleChange}
                className="block appearance-none w-full bg-pLC border border-pLC py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-pMC"
                id="year"
              >
                <option value={"0"}>Choose Year</option>
                <option value={"I"}>I Year</option>
                <option value={"II"}>II Year</option>
                <option value={"III"}>III Year</option>
                <option value={"IV"}>IV Year</option>
                <option value={"V"}>V Year</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="weeks"
            >
              Duration in Weeks
            </label>
            <input
              required
              name="weeks"
              onChange={handleChange}
              className="appearance-none block w-full bg-pLC border border-pLC rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-pMC"
              id="weeks"
              type="number"
              placeholder="# of Weeks"
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="credits"
            >
              Total Credits
            </label>
            <input
              required
              name="credits"
              onChange={handleChange}
              className="appearance-none block w-full bg-pLC border border-pLC rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-pMC"
              id="credits"
              type="number"
              placeholder="# of Credits"
            />
          </div>
        </div>
        <div className="flex flex-col items-center mt-4">
          <button
            type="submit"
            className="bg-pLC hover:bg-pMC text-pC hover:text-pLC font-bold py-2 px-4 border-b-4 border-pC rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddCourse;
