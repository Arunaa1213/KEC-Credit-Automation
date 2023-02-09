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
    inputs["approve_status"] = 0 ;
    axios
      .post(
        "http://localhost:81/KEC-Credit-Automation-DB/exemptionRequest.php",
        inputs
      )
      .then(function (response) {
        console.log(response.data);
        navigate("/addcourse");
      });
  };
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-pELC text-pC">
      <button className="absolute left-16 top-10" onClick={() => navigate(-1)}>      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="h-4 inline m-2"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>      
</button>
      <div className="w-3/4 min-w-max max-w-xl p-6 m-auto bg-white rounded-md shadow-lg ">
        <div className="flex flex-col items-center mt-4 font-extrabold">
          <h2>EXEMPTION REQUEST</h2>
        </div>
        <form className=" max-w-lg" onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide  text-xs font-bold mb-2"
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
            <div className="w-1/2 px-3">
              <label
                className="block uppercase tracking-wide  text-xs font-bold mb-2"
                htmlFor="sem"
              >
                Semester
              </label>
              <input
                className="appearance-none block w-full bg-pLC  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-sem"
                type="text"
                name="sem"
                placeholder="VII"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-1/2 px-3">
              <label
                className="block uppercase tracking-wide  text-xs font-bold mb-2"
                htmlFor="type"
              >
                Type of Course(PE/OE)
              </label>
              <input
                className="appearance-none block w-full bg-pLC  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-courses"
                type="text"
                name="type"
                placeholder="Academic course"
                onChange={handleChange}
              />
            </div>
            <div className="w-1/2  px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide  text-xs font-bold mb-2"
                htmlFor="code"
              >
                course code:
              </label>
              <input
                className="appearance-none block w-full bg-pLC  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-credit"
                type="text"
                name="code"
                placeholder="Credit course"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-1/2 px-3">
              <label
                className="block uppercase tracking-wide  text-xs font-bold mb-2"
                htmlFor="name"
              >
                Name of course:
              </label>
              <input
                className="appearance-none block w-full bg-pLC  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-courses"
                type="text"
                name="name"
                placeholder="Academic course"
                onChange={handleChange}
              />
            </div>
            <div className="w-1/2 px-3">
              <label
                className="block uppercase tracking-wide  text-xs font-bold mb-2"
                htmlFor="credit"
              >
                course credit:
              </label>
              <input
                className="appearance-none block w-full bg-pLC  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-courses"
                type="text"
                name="credit"
                placeholder="Academic course"
                onChange={handleChange}
              />
            </div>
          </div>

          <h4 className="block uppercase tracking-wide  text-xs font-bold mb-2">
            One/Two credit/NPTEL/Foreign language/NCC studies courses used to
            exempt this course
          </h4>
          <br></br>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-1/2 px-3">
              <label
                className="block uppercase tracking-wide  text-xs font-bold mb-2"
                htmlFor="code1"
              >
                course code:
              </label>
              <input
                className="appearance-none block w-full bg-pLC  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-courses"
                type="text"
                name="code1"
                placeholder="course code"
                onChange={handleChange}
              />
            </div>
            <div className="w-1/2 px-3">
              <label
                className="block uppercase tracking-wide  text-xs font-bold mb-2"
                htmlFor="credit1"
              >
                course credit:
              </label>
              <input
                className="appearance-none block w-full bg-pLC  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-courses"
                type="text"
                name="credit1"
                placeholder="credits used"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide  text-xs font-bold mb-2"
                htmlFor="name1"
              >
                course name:
              </label>
              <input
                className="appearance-none block w-full bg-pLC  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-courses"
                type="text"
                name="name1"
                placeholder="course name"
                onChange={handleChange}
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

export default Exemption;
