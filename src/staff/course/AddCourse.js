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
 
        axios.post('http://localhost:81/react/api/save', inputs).then(function(response){
            console.log(response.data);
            navigate('/addcourse');
        });
         
    }

    return (
      <div className="text-[#660000]" >
        <form classname="w-full max-w-lg" onSubmit={handleSubmit}>
            <div classname="flex flex-wrap -mx-3 mb-6">
                <div classname="w-full px-3">
                <label classname="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-password">
                    Course Name
                </label>
                <input name="name" onChange={handleChange} classname="appearance-none block w-full bg-[#ffd6d6] border border-[#ffd6d6] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[#880808]" id="grid-password" type="text" placeholder="" />
                </div>
            </div>
            
            <div classname="flex flex-wrap -mx-3 mb-6">
                <div classname="w-full px-3">
                <label classname="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-password">
                    Course Code
                </label>
                <input name="code" onChange={handleChange} classname="appearance-none block w-full bg-[#ffd6d6] border border-[#ffd6d6] rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-[#880808]" id="grid-password" type="text" placeholder="" />
                </div>
            </div>
            <div classname="flex flex-wrap -mx-3 mb-2">
                <div classname="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label classname="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-state">
                        For Which Year
                    </label>
                    <div classname="relative">
                        <select name="year" onChange={handleChange} classname="block appearance-none w-full bg-[#ffd6d6] border border-[#ffd6d6] py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-[#880808]" id="grid-state">
                            <option>Choose Year</option>
                            <option>I Year</option>
                            <option>II Year</option>
                            <option>III Year</option>
                            <option>IV Year</option>
                            <option>V Year</option>
                        </select>
                        <div classname="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                            <svg classname="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>
                <div classname="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label classname="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-zip">
                        Duration in Weeks
                    </label>
                    <input name="name" onChange={handleChange} classname="appearance-none block w-full bg-[#ffd6d6] border border-[#ffd6d6] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[#880808]" id="grid-zip" type="number" placeholder="# of Weeks"/>
                </div>
                <div classname="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label classname="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-zip">
                        Total Credits
                    </label>
                    <input name="name" onChange={handleChange} classname="appearance-none block w-full bg-[#ffd6d6] border border-[#ffd6d6] rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-[#880808]" id="grid-zip" type="number" placeholder="# of Credits"/>
                </div>
            </div>
        </form>
      </div>
    );
  }
  
export default AddCourse;