// src/components/EbookForm.js
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../../../../Helper';

const EbookForm = () => {
  const navigate = useNavigate()
  
  const [formData,setFormData]=useState({
    title:'',
    description:'',
    ebookLink:'',
    thumbnail:null
  })

  const handelInputChange = (e)=>{
    const {name,value} = e.target
    setFormData({
      ...formData,
      [name]:value
    })
  }

  const handelFileChange = (e)=>{
    const {name,files} = e.target
    setFormData({
      ...formData,
      [name]:files[0],
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("ebookLink", formData.ebookLink);
    formDataToSend.append("thumbnail", formData.thumbnail);
    
    if(!formData.description || !formData.ebookLink || !formData.thumbnail ||!formData.title){
      return toast.error("All field are required");
    }

    try {

      const datavalue = JSON.parse(localStorage.getItem("user"));
      const accessToken = datavalue?.accessToken;

      const response = await fetch(`${BASE_URL}/collegebuddy/api/v1/ebooks/uploadebook`,{
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        method:"POST",
        body: formDataToSend
      })

      if(response.status==200){
        toast.success("Add ebooks successfully");
       navigate("/admindashboard")
       return
      }


    } catch (error) {
      toast.error("Add ebooks faield")
      console.log(error);
      return
      
    }

  };

  return (
    <div className="flex justify-center items-center min-h-screen p-2 ">
      <form
        className="w-full max-w-lg sm:w-1/2 bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Add New eBook</h2>
        <div className="mb-4 w-full">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            name='title'
            placeholder="Title"
            value={formData.title}
            onChange={handelInputChange}
          />
        </div>
        <div className="mb-4 w-full">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            name='description'
            placeholder="Description"
            value={formData.description}
            onChange={handelInputChange}
          />
        </div>
        <div className="mb-4 w-full">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="thumbnail">
            Thumbnail
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="thumbnail"
            type="file"
            name='thumbnail'
            onChange={handelFileChange}
          />
        </div>
        <div className="mb-4 w-full">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ebook">
            eBook File
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="ebook"
            type="text"
            name='ebookLink'
            value={formData.ebookLink}
            onChange={handelInputChange}
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
};

export default EbookForm;
