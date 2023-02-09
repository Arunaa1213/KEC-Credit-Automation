import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Multiselect from 'multiselect-react-dropdown'
function AddCourse (state) {
  const navigate = useNavigate()
  const location = useLocation()
  const [inputs, setInputs] = useState([])

  const [options] = useState([1, 2, 3, 4, 5])
  const handleChange = event => {
    const name = event.target.name
    const value = event.target.value
    console.log(name)
    // console.log(name);
    console.log(value)
    setInputs(values => ({ ...values, [name]: value }))
  }
  const handleSubmit = event => {
    event.preventDefault()
    console.log(location.state.user_email)
    inputs['email'] = location.state.user_email
    // inputs["course_is_for"] = year1;
    console.log(inputs)
    axios
      .post(
        'http://localhost:81/KEC-Credit-Automation-DB/addcourse.php',
        inputs
      )
      .then(function (response) {
        console.log(response.data)
        navigate('/addcourse', {
          state: {
            user_email: location.state.user_email,
            user_name: location.state.user_name
          }
        })
      })
  }
  return (
    <div className="w-3/4 min-w-max max-w-xl p-6 m-auto bg-white rounded-md shadow-md">
      <div className="text-3xl font-bold text-center text-pC">
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
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="year"
            >
              For Which Year
            </label>
            <div className="relative">
              {/* <div className="appearance-none block w-full bg-pLC border border-pLC rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-pMC"> */}
              <Multiselect
                options={options}
                // onSearch={handleSearch}
                onRemove={event => {
                  console.log(event)
                }}
                onSelect={event => {
                  console.log(event)
                  inputs['course_is_for'] = event
                }}
                // loading={loading}
                isObject={false}
                showCheckbox
                // displayValue="year"
              />

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
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="weeks"
            >
              Duration in Hours
            </label>
            <input
              required
              name="weeks"
              onChange={handleChange}
              className="appearance-none block w-full bg-pLC border border-pLC rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-pMC"
              id="weeks"
              type="number"
              placeholder="# of Hours"
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="credits"
            >
              Credits
            </label>
            <div className="relative">
              <select
                name="credits"
                onChange={handleChange}
                className="appearance-none block w-full bg-pLC border border-pLC rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-pMC"
                id="credits"
                type="number"
                placeholder="# of Credits"
              >
                <option value={0}>Choose credit</option>
                <option value={1}>1 credit</option>
                <option value={2}>2 credit</option>
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
        <div className="flex flex-wrap -mx-3 mt-6">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="fee"
            >
              Fee
            </label>
            <input
              required
              name="fee"
              onChange={handleChange}
              className="appearance-none block w-full bg-pLC border border-pLC rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-pMC"
              id="fee"
              type="number"
              placeholder="fee in Rs"
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="facultytype"
            >
              Type of Faculty
            </label>
            <div className="relative">
              <select
                name="facultytype"
                onChange={handleChange}
                className="appearance-none block w-full bg-pLC border border-pLC rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-pMC"
                id="facultytype"
                type="text"
                placeholder="Type"
              >
                <option value={'0'}>Choose credit</option>
                <option value={'external'}>External Faculty</option>
                <option value={'internal'}>Internal Faculty</option>
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
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="facultyname"
            >
              Faculty Name
            </label>
            <input
              required
              name="facultyname"
              onChange={handleChange}
              className="appearance-none block w-full bg-pLC border border-pLC rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-pMC"
              id="facultyname"
              type="text"
              placeholder="Teaching faculty name"
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
  )
}

export default AddCourse
