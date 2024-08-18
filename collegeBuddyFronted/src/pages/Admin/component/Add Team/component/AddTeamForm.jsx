import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import {BASE_URL} from "../../../../../../Helper"

const AddTeamForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    profilePic: null,
    role: '',
    summary: '',
    portfolio: '',
    instagram: '',
    linkedin: '',
    github: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("profilePic", formData.profilePic);
    formDataToSend.append("role", formData.role);
    formDataToSend.append("summary", formData.summary);
    formDataToSend.append("portfolio", formData.portfolio);
    formDataToSend.append("instagram", formData.instagram);
    formDataToSend.append("linkedin", formData.linkedin);
    formDataToSend.append("github", formData.github);

    if (!formData.name || !formData.profilePic || !formData.role || !formData.summary) {
      return toast.error("Name, Profile Picture, Role, and Summary are required");
    }

    try {
      const datavalue = JSON.parse(localStorage.getItem("user"));
      const accessToken = datavalue?.accessToken;

      const response = await fetch(`${BASE_URL}/collegebuddy/api/v1/team/upload-team`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        method: "POST",
        body: formDataToSend
      });

      if (response.ok) {
        toast.success("Team member added successfully");
        navigate("/admindashboard");
        return;
      }

    } catch (error) {
      toast.error("Failed to add team member");
      console.log(error);
      return;
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-2">
      <form
        className="w-full max-w-lg sm:w-1/2 bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Add New Team Member</h2>

        <div className="mb-4 w-full">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name='name'
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4 w-full">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profilePic">
            Profile Picture
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="profilePic"
            type="file"
            name='profilePic'
            onChange={handleFileChange}
          />
        </div>

        <div className="mb-4 w-full">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
            Role
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="role"
            type="text"
            name='role'
            placeholder="Role"
            value={formData.role}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4 w-full">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="summary">
            Summary
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="summary"
            name='summary'
            placeholder="Summary"
            value={formData.summary}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4 w-full">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="portfolio">
            Portfolio (Optional)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="portfolio"
            type="text"
            name='portfolio'
            placeholder="Portfolio URL"
            value={formData.portfolio}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4 w-full">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="instagram">
            Instagram (Optional)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="instagram"
            type="text"
            name='instagram'
            placeholder="Instagram URL"
            value={formData.instagram}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4 w-full">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="linkedin">
            LinkedIn (Optional)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="linkedin"
            type="text"
            name='linkedin'
            placeholder="LinkedIn URL"
            value={formData.linkedin}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4 w-full">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="github">
            GitHub (Optional)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="github"
            type="text"
            name='github'
            placeholder="GitHub URL"
            value={formData.github}
            onChange={handleInputChange}
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

export default AddTeamForm;
