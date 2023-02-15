import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


export default function Exemption() {
  const navigate = useNavigate();
  const [location, setLocation] = useState(useLocation());
  const [inputs, setInputs] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    var values = { username: location.state.user_roll };
    axios
      .post(
        "http://localhost:81/KEC-Credit-Automation-DB/getpreviousrecords.php",
        values
      )
      .then(function (response) {
        console.log(response.data);
        setData(response.data);
      });
  }, []);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const [iField, setiField] = useState([{ course_name: "", tot_credit: 0, course_code: "", used_credit: "" }]);

  const handleChangeInput = (index, event) => {
    const values = [...iField];
    values[index][event.target.name] = event.target.value;
    setiField(values);
  }

  const HandleAdd = (e) => {
    e.preventDefault();
    console.log("add");
    setiField([...iField, { course_name: "", tot_credit: 0, course_code: "", used_credit: "" }])
  }

  const handleRemove = (e, index) => {
    e.preventDefault();
    const values = [...iField];
    values.splice(index, 1);
    setiField(values);
  }

  const handleSubmit = (event) => {
    console.log("pressed");
    event.preventDefault();
    inputs["code"] = location.state.course_code;
    inputs["name"] = location.state.course_name;
    inputs["sem"] = location.state.course_sem;
    inputs["type"] = location.state.course_category;
    inputs["credit"] = location.state.course_credit;
    inputs["roll"] = location.state.user_roll;
    inputs["approve_status"] = 0;
    // console.log("", iField);
    iField.map((e,index)=>{
      console.log(e);
      inputs["course_code"+index] = e.course_code; 
      inputs["tot_credit"+index] = e.tot_credit; 
      inputs["course_name"+index] = e.course_name; 
      inputs["used_credit"+index] = e.used_credit; 
    })
    console.log("file: Exemption.js:19 ~ handleSubmit ~ inputs", inputs);
    axios
      .post(
        "http://localhost:81/KEC-Credit-Automation-DB/exemptionRequest.php",
        inputs
      )
      .then(function(response) {
        console.log(response.data);
        window.location.reload();
      });
  };


  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-pELC text-pC">
      <button className="absolute left-16 top-10" onClick={() => navigate(-1)}>
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          className="h-4 inline m-2"
        >
          <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
        </svg>
      </button>
      <div className="w-3/4 min-w-max max-w-xl p-6 m-auto bg-white rounded-md shadow-lg ">
        <div className="flex flex-col items-center mt-4 font-extrabold">
          <h2>EXEMPTION REQUEST</h2>
        </div>
        <form className=" max-w-xl" 
              onSubmit={handleSubmit}>
          <div><div className="flex flex-wrap -mx-3 mb-6">
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
                value={location.state.user_roll}
                name="roll"
                type="text"
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
                value={location.state.course_sem}
                name="sem"
                placeholder="VII"
                onChange={handleChange}
              />
            </div>
          </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-xs font-bold mb-2"
                  htmlFor="type"
                >
                  Type of Course(PE/OE)
                </label>
                <input
                  className="appearance-none block w-full bg-pLC  border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-sem"
                  type="text"
                  value={location.state.course_category}
                  name="type"
                  placeholder="VII"
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
                  value={location.state.course_code}
                  name="code"
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
                  value={location.state.course_name}
                  type="text"
                  name="name"
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
                  name="ac_credit"
                  value={location.state.course_credit}
                  placeholder="Academic course"
                  onChange={handleChange}
                />
              </div>
            </div></div>
          <div><hr className="w-48 h-1 mx-auto my-4 bg-pC border-0 rounded md:my-10 " />
            <h4 className="block uppercase tracking-wide  text-xs font-bold mb-2">
              One/Two credit/NPTEL/Foreign language/NCC studies courses used to
              exempt this course
            </h4></div>

          <div className="flex justify-end"><button className="bg-pC text-pLC px-3 py-1 rounded-lg " onClick={(e) => HandleAdd(e)}>Add</button></div>
          {iField.map((e, index) => {
            if (index >= 3) {
              alert("Shouldn't greater than 3")
              setiField([{ course_name: "", tot_credit: 0, course_code: "", used_credit: "" }, { course_name: "", tot_credit: 0, course_code: "", used_credit: "" }, { course_name: "", tot_credit: 0, course_code: "", used_credit: "" }])
            }
            return <div key={index} >
              <div className="flex justify-between items-center mt-4">
                <div>
                  <div className="flex flex-wrap -mx-3 mb-6">
                    {/* COURSE CODE STARTS  */}
                    <div className="w-1/2 px-3">
                      <label
                        className="block uppercase tracking-wide  text-xs font-bold mb-2"
                        htmlFor="credit1"
                      >
                        Course code
                      </label>
                      <div className="relative">
                        <select
                          className="appearance-none block w-full bg-pLC  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-courses"
                          type="text"
                          name="course_code"

                          onChange={
                            event =>handleChangeInput(index, event) 
                          }
                        >
                          <option value={0}>Choose Code</option>
                          {data.map((e, index) => (
                            <option key={index}>{e.course_code}</option>
                          ))}
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
                    {/* COURSE CODE ENDS  */}

                    {/* course credit begins */}
                    <div className="w-1/2 px-3">
                      <label
                        className="block uppercase tracking-wide  text-xs font-bold mb-2"
                        htmlFor="sem"
                      >
                        COURSE CREDIT
                      </label>
                      <div className="relative">
                        <select
                          className="appearance-none block w-full bg-pLC  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-courses"
                          type="text"
                          name="tot_credit"
                          onChange={
                            event => handleChangeInput(index, event)
                          }
                        >
                          <option value={0}>Choose Credit</option>
                          <option value={1} >1</option>
                          <option value={2} >2</option>
                          <option value={3} >3</option>

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
                    {/* COURSE CREDIT ENDS */}
                  </div>
                  <div className="flex flex-wrap -mx-3 ">
                    <div className="w-1/2 px-3">
                      <label
                        className="block uppercase tracking-wide  text-xs font-bold mb-2"
                        htmlFor="name1"
                      >
                        course name:
                      </label>
                      <div className="relative">
                        <select
                          className="appearance-none block w-full bg-pLC  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-courses"
                          type="text"
                          name="course_name"
                          onChange={
                            event =>handleChangeInput(index, event) 
                          }
                        >
                          <option value={0}>Choose Name</option>
                          {data.map((e, index) => (
                            <option key={index}>{e.course_name}</option>
                          ))}
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
                    <div className="w-1/2 px-3">
                      <label
                        className="block uppercase tracking-wide  text-xs font-bold mb-2"
                        htmlFor="credit1"
                      >
                        No of Credits to Exempt
                      </label>
                      <div className="relative">
                        <select
                          className="appearance-none block w-full bg-pLC  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-courses"
                          type="text"
                          name="used_credit"
                          onChange={
                            event => handleChangeInput(index, event)
                          }
                        >
                          <option value={0}>Choose Credit</option>
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
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
                  </div>
                </div>
                {index != 0 ?  <button className="bg-pLC text-pC px-3 py-1 ml-4 h-fit rounded-lg border border-pC" onClick={(e) => handleRemove(e, index)}>remove</button> : <div></div>}
               </div>
              <hr className="mx-auto bg-pC my-4 border-2 rounded-3xl w-1/2 border-pC" />
            </div>
          }

          )}
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