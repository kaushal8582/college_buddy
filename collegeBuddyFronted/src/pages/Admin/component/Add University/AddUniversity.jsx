import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../../../../Helper'

const AddUniversity = () => {

  const [name,setName] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async(e)=>{
    e.preventDefault()
    try {
      if(!name){
        toast.error("University Name is required")
        return;
      }

      const datavalue = JSON.parse(localStorage.getItem("user"));
      const accessToken = datavalue?.accessToken;
      const response = await fetch(`${BASE_URL}/collegebuddy/api/v1/college/addcollegename`,{
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json"
        },
        method:"POST",
        body:JSON.stringify({name})
      })

      if(response.ok){
        toast.success("University add successfully ")
        navigate("/admindashboard")
        return;
      }

    } catch (error) {
      toast.error("Add university error")
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen p-2 ">
      <form
        className="w-full max-w-lg sm:w-1/2 bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Add New University</h2>
        <div className="mb-4 w-full">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Name 
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            name='name'
            placeholder="Enter College name "
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
        </div>
        
        
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddUniversity