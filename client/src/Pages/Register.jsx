import React, { useState } from "react";
import Input from "../Components/Input";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [name, setName] = useState("");
  const [phn_num, setPhoneNum] = useState("");
  const [role_id, setId] = useState();
  const [clg, setCollege] = useState("");
  const [country, setCountry] = useState("");
  const [role, setRole] = useState("Student");
  const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/details", {
        name,
        phn_num,
        role_id,
        clg,
        country,
        role,
      },{withCredentials:true});
      console.log(name,phn_num,clg,country,role,role_id)
      if(response.status==200){
        navigate("/profile");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        if (error.response.data.message === "All fields are required.") {
          alert("Missing Fields");
        }
      } else {
        console.error('Other error:', error.message);
      }
    }
  };

  
  return (
    // <div className="h-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center">
    //   <div className="w-96 bg-white shadow-md mt-20 h-min flex flex-col items-center rounded-lg ">
    //     <h1 className="text-2xl font-bold tracking-wider mt-5">Register</h1>
    //     <Input name="Name" onChange={setName} />
    //     <Input name="Phone Number" onChange={setPhoneNum} />
    //     <Input name="Staff/Student ID" onChange={setId} />
    //     <br />
    //     <select
    //       name={role}
    //       onChange={(e)=>{setRole(e.target.value)}}
    //       className="mt-8 border-b-2 focus:outline-none text-opacity-30 p-2 w-[260px] focus:border-cyan-400 bg-white focus:border-b-2"
    //     >
    //       <option value="Student">Student</option>
    //       <option value="Staff">Staff</option>
    //     </select>
    //     <Input name="College" onChange={setCollege} />
    //     <Input name="Country" onChange={setCountry} />

    //     <button
    //       type="button"
    //       className="my-10 bg-gradient-to-r to-cyan-500 from-blue-500 text-white p-3 tracking-wider rounded-md font-['Aptos']"
    //       onClick={handleSubmit}
    //     >
    //       SUBMIT DETAILS
    //     </button>
    //   </div>
    // </div>

    <div className="h-screen bg-black flex justify-center items-center">
      <div className="w-3/6 bg-gray-800 shadow-lg h-min flex flex-col items-center rounded-lg p-6">
        <h1 className="text-2xl font-bold tracking-wider mt-5 text-green-400">Register</h1>
        <Input name="Name" onChange={setName} />
        <Input name="Phone Number" onChange={setPhoneNum} />
        <Input name="Staff/Student ID" onChange={setId} />
        <br />
        <select
          name={role}
          onChange={(e) => { setRole(e.target.value); }}
          className="border-b-2 border-green-400 focus:outline-none p-2 w-60 bg-gray-700 text-green-300 focus:border-green-400"    >
          <option value="Student">Student</option>
          <option value="Staff">Staff</option>
        </select>
        <Input name="College" onChange={setCollege} />
        <Input name="Country" onChange={setCountry} />
        <button
          type="button"
          className="my-10 bg-gradient-to-r from-green-500 to-green-700 text-black p-3 tracking-wider rounded-md font-['Aptos']"
          onClick={handleSubmit} >
          SUBMIT DETAILS
        </button>
      </div>
    </div>

  );
};



export default Register;
