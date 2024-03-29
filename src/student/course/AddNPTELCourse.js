import { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

function AddNPTELCourse() {
  const navigate = useNavigate();
  const location = useLocation();
  const [inputs, setInputs] = useState([]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    console.log(location.state.user_roll);
    event.preventDefault();
    inputs["roll"] = location.state.user_roll;
    console.log(inputs);
    axios
      .post(
        "http://localhost:81/KEC-Credit-Automation-DB/addnptelcourse.php",
        inputs
      )
      .then(function(response) {
        console.log(response.data);
        navigate("/addnptelcourse");
      });
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-pELC">
      <button className="absolute left-16 top-10" onClick={() => navigate(-1)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          className="h-4 inline m-2"
        >
          <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
        </svg>
      </button>
      <div className="w-3/4 min-w-max max-w-xl p-6 m-auto bg-white rounded-md shadow-lg text-pC">
        <div className="flex flex-col items-center mt-4 font-extrabold">
          <h2>ADD NPTEL COURSES</h2>
        </div>
        <form className="max-w-lg" onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-3 mb-6 md:mb-3">
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
          <div className="flex flex-wrap -mx-3 mb-2 ">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-xs font-bold mb-2"
                htmlFor="type"
              >
                Type Of Certificate
              </label>
              <div className="relative">
                <select
                  name="type"
                  onChange={handleChange}
                  className="block appearance-none w-full bg-pLC border border-pLC py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-pMC"
                  id="type"
                >
                  <option value={"0"}>Choose type</option>
                  <option value={"Elite+Gold"}>Elite+Gold</option>
                  <option value={"Elite+Silver"}>Elite+Silver</option>
                  <option value={"Elite"}>Elite</option>
                  <option value={"Completed"}>Completed</option>
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
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-3">
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
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-xs font-bold mb-2"
                htmlFor="weeks"
              >
                Assignment Score
              </label>
              <input
                step="any"
                required
                name="assignment_score"
                onChange={handleChange}
                className="appearance-none block w-full bg-pLC border border-pLC rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-pMC"
                id="weeks"
                type="number"
                placeholder="Score"
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-xs font-bold mb-2"
                htmlFor="weeks"
              >
                Exam Score
              </label>
              <input
                step="any"
                required
                name="exam_score"
                onChange={handleChange}
                className="appearance-none block w-full bg-pLC border border-pLC rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-pMC"
                id="weeks"
                type="number"
                placeholder="Score"
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-xs font-bold mb-2"
                htmlFor="credits"
              >
                Final Score
              </label>
              <input
                step="any"
                required
                name="final_score"
                onChange={handleChange}
                className="appearance-none block w-full bg-pLC border border-pLC rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-pMC"
                id="credits"
                type="number"
                placeholder="Score"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6 md:mb-3">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-xs font-bold mb-2"
                htmlFor="proof"
              >
                Certificate ( As Link )
              </label>
              <input
                required
                name="proof"
                onChange={handleChange}
                className="appearance-none block w-full bg-pLC border border-pLC rounded py-3 px-4 mb-3  focus:outline-none focus:bg-white focus:border-pMC"
                id="proof"
                type="text"
                placeholder=""
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
    </div>
  );
}

export default AddNPTELCourse;
