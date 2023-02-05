import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddCourse() {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:81/credit_automation/addcourse.php', inputs).then(function(response){
            console.log(response.data);
            navigate('/addcourse');
        }); 
    }

    return (
      <div className="text-primaryColor" >
        <form className="max-w-lg" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="name">
                    Course Name
                </label>
                <input required name="name" onChange={handleChange} className="appearance-none block w-full bg-primaryLightColor border border-primaryLightColor rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primaryMediumColor" id="name" type="text" placeholder="" />
                </div>
            </div> 
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="code">
                    Course Code
                </label>
                <input required name="code" onChange={handleChange} className="appearance-none block w-full bg-primaryLightColor border border-primaryLightColor rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primaryMediumColor" id="code" type="text" placeholder="" />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="year">
                        For Which Year
                    </label>
                    <div className="relative">
                        <select name="year" onChange={handleChange} className="block appearance-none w-full bg-primaryLightColor border border-primaryLightColor py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-primaryMediumColor" id="year">
                            <option value={1}>I Year</option>
                            <option value={2}>II Year</option>
                            <option value={3}>III Year</option>
                            <option value={4}>IV Year</option>
                            <option value={5}>V Year</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="weeks">
                        Duration in Weeks
                    </label>
                    <input required name="weeks" onChange={handleChange} className="appearance-none block w-full bg-primaryLightColor border border-primaryLightColor rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primaryMediumColor" id="weeks" type="number" placeholder="# of Weeks"/>
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="credits">
                        Total Credits
                    </label>
                    <input required name="credits" onChange={handleChange} className="appearance-none block w-full bg-primaryLightColor border border-primaryLightColor rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-primaryMediumColor" id="credits" type="number" placeholder="# of Credits"/>
                </div>
            </div>
            <div className="flex flex-col items-center mt-4">
                <button type="submit" className="bg-primaryLightColor hover:bg-primaryMediumColor text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                Button
                </button>
            </div>
        </form>
      </div>
    );
  }

export default AddCourse;
