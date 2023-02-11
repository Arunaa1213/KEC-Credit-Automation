import { useState } from 'react'
import axios from 'axios'
import { useNavigate, useLocation } from 'react-router-dom'
function Exemption () {
  const navigate = useNavigate()
  const [inputs, setInputs] = useState([])
  const [drop, setDrop] = useState([])
  const [value, setValue] = useState()
  const location = useLocation()
  const [cr_credit1, setcredit1] = useState();
  
  const handleChange = event => {
    event.preventDefault();
    const name = event.target.name
    const value = event.target.value
    if (event.target.name === 'cr_code1') {
      setValue(event.target.value)
    }

    setInputs(values => ({ ...values, [name]: value }))
  }

  axios
    .post(
      'http://localhost:81/KEC-Credit-Automation-DB/getpreviousrecords.php',
      { username: location.state.user_roll }
    )
    .then(function (response) {
      // console.log(response)
      setDrop(response.data)
    })

  const handleSubmit = event => {
    event.preventDefault()
    inputs['course_code'] = location.state.course_code
    inputs['course_name'] = location.state.course_name
    inputs['course_sem'] = location.state.course_sem
    inputs['course_regulation'] = location.state.course_regulation
    inputs['course_category'] = location.state.course_category
    inputs['course_credit'] = location.state.course_credit
    inputs['user_roll'] = location.state.user_roll
    // event.preventDefault()
    // inputs['approve_status'] = 0
    // axios
    //   .post(
    //     'http://localhost:81/KEC-Credit-Automation-DB/exemptionRequest.php',
    //     inputs
    //   )
    //   .then(function (response) {
    //     console.log(response.data)
    //     navigate('/studenthome')
    //   })
  }
  function checkdata (obj) {
    if (obj.course_code === value) {
      return true
    } else {
      return false
    }
  }
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden bg-pELC text-pC">
      {/* <button className="absolute left-16 top-10" onClick={() => navigate(-1)}>
        {' '}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          className="h-4 inline m-2"
        >
          <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
        </svg>
      </button> */}
      <div className="w-3/4 min-w-max max-w-xl p-6 m-auto bg-white rounded-md shadow-lg ">
        <div className="flex flex-col items-center mt-4 font-extrabold">
          <h2>EXEMPTION REQUEST</h2>
        </div>
        <form className=" max-w-lg" onSubmit={handleSubmit}>
          <br />
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-1/2 px-3">
              <label
                className="block uppercase tracking-wide  text-xs font-bold mb-2"
                htmlFor="cr_code1"
              >
                course code:
              </label>
              {/* <input
                className="appearance-none block w-full bg-pLC  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-courses"
                type="text"
                name="cr_code1"
                placeholder="course code"
                onChange={handleChange}
              /> */}
              <div className="relative">
                <select
                  className="appearance-none block w-full bg-pLC  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-courses"
                  type="text"
                  name="cr_code1"
                  placeholder="course code"
                  onChange={handleChange}
                >
                  <option value={'0'}>Choose course code</option>
                  <option value={'20CS01'}>20CS01</option>
                  <option value={'20CS03'}>20CS03</option>
                  <option value={'20CS04'}>20CS04</option>
                  
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
                name="cr_credit1"
                placeholder="course name"
                value= {cr_credit1}
                onChange={handleChange}
              />
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
  )
}

export default Exemption

/*

            <div className="w-1/2 px-3">
              <label
                className="block uppercase tracking-wide  text-xs font-bold mb-2"
                htmlFor="name1"
              >
                credit used for exemption
              </label>

              <div className="relative">
                <select
                  className="appearance-none block w-full bg-pLC  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-courses"
                  type="text"
                  name="ex_credit1"
                  placeholder="course name"
                  onChange={handleChange}
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
                name="cr_credit1"
                placeholder="course name"
                // value={drop.filter(checkdata).map(element => {
                //   return element.course
                // })}
                onChange={handleChange}
              />
            </div>

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
                value={location.state.user_roll}
                placeholder="20CSR020"
                onChange={handleChange}
              />
            </div>
            <div className="w-1/2 px-3 mb-6 md:mb-0">
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
            <div className="w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide  text-xs font-bold mb-2"
                htmlFor="type"
              >
                Type of course
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
                name="ac_code"
                value={location.state.course_code}
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
                value={location.state.course_name}
                placeholder="Academic course"
                onChange={handleChange}
              />
            </div>

            <div className="w-1/2  px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide  text-xs font-bold mb-2"
                htmlFor="code"
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
          </div>

          <h4 className="block uppercase tracking-wide  text-xs font-bold mb-2">
            One/Two credit/NPTEL/Foreign language/NCC studies courses used to
            exempt this course
          </h4>

*/
