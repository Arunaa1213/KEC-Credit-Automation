import { useState } from "react";
function AdminHome() {
  const [role, setrole] = useState([]);
  const [year, setyear] = useState([]);
  const [dept, setdept] = useState([]);
  const rolechange = (event) => {
    console.log(event.target.value);
    setrole(event.target.value);
  };
  const yearchange = (event) => {
    console.log(event.target.value);
    setyear(event.target.value);
  };
  const deptchange = (event) => {
    console.log(event.target.value);
    setdept(event.target.value);
  };
  var data = [
    {
      role: "student",
      year: "III",
      dept: "cse",
      name: "Mukhii",
    },
    {
      role: "student",
      year: "III",
      dept: "cse",
      name: "Arunaa",
    },
    {
      role: "student",
      year: "III",
      dept: "cse",
      name: "Hema",
    },
    {
      role: "student",
      year: "III",
      dept: "it",
      name: "Kavi",
    },
    {
      role: "staff",
      year: "III",
      dept: "cse",
      name: "Shanthi",
    },
    {
      role: "student",
      year: "III",
      dept: "cse",
      name: "Malliga",
    },
  ];

  function checkdata(obj) {
    return obj.role === role && obj.year === year && obj.dept === dept;
  }
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-pELC">
      <div className="w-3/4 min-w-max max-w-xl p-6 m-auto bg-white rounded-md shadow-lg text-pC">
        <div className="flex flex-col items-center mt-4 font-extrabold">
          <h2>GENERATE REPORT</h2>
        </div>
        <form className="max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            {/* ROLE */}
            <div className="w-full px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-xs font-bold mb-2"
                htmlFor="year"
              >
                ROLE
              </label>
              <div className="relative">
                <select
                  name="year"
                  onChange={rolechange}
                  className="block appearance-none w-full bg-pLC border border-pLC py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-pMC"
                  id="year"
                >
                  <option>Select role</option>
                  <option value={"student"}>Student</option>
                  <option value={"staff"}>Staff</option>
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
            {/* YEAR  */}
            <div className="w-full px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-xs font-bold mb-2"
                htmlFor="year"
              >
                YEAR
              </label>
              <div className="relative">
                <select
                  name="year"
                  onChange={yearchange}
                  className="block appearance-none w-full bg-pLC border border-pLC py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-pMC"
                  id="year"
                >
                  <option>Select year</option>
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
            {/* DEPARTMENT */}

            <div className="w-full px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-xs font-bold mb-2"
                htmlFor="year"
              >
                DEPARTMENT
              </label>
              <div className="relative">
                <select
                  name="year"
                  onChange={deptchange}
                  className="block appearance-none w-full bg-pLC border border-pLC py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-pMC"
                  id="year"
                >
                  <option>Select department</option>
                  <option value={"cse"}>CSE</option>
                  <option value={"ece"}>ECE</option>
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

            {/* NAME */}
            <div className="w-full px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-xs font-bold mb-2"
                htmlFor="year"
              >
                NAME
              </label>
              <div className="relative">
                <select
                  name="year"
                  className="block appearance-none w-full bg-pLC border border-pLC py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-pMC"
                  id="year"
                >
                  {/* <option>{console.log(data.filter(checkdata))}</option> */}
                  {data.filter(checkdata).map((element) => (
                    <option key={element["name"]}>{element["name"]}</option>
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
          </div>
          <div className="flex flex-col items-center mt-4">
            <button
              type="submit"
              className="bg-pLC hover:bg-pMC text-pC hover:text-pLC font-bold py-2 px-4 border-b-4 border-pC rounded"
            >
              Generate report
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminHome;
