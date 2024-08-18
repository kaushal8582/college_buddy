// src/components/AddVideoForm.js
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../../../../Helper";

const AddVideoForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    videoLink: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.description || !formData.videoLink) {
      return toast.error("All fields are required");
    }

    try {
      const datavalue = JSON.parse(localStorage.getItem("user"));
      const accessToken = datavalue?.accessToken;

      const response = await fetch(
        `${BASE_URL}/collegebuddy/api/v1/video/upload-video`,
        {
          method: "POST",
          body: JSON.stringify({
            title: formData.title,
            desc: formData.description,
            link: formData.videoLink,
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.status === 200) {
        toast.success("Video added successfully");
        navigate("/admindashboard");
        return;
      } else {
        toast.error("Failed to add video");
      }
    } catch (error) {
      toast.error("An error occurred while adding the video");
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
        <h2 className="text-2xl font-bold mb-6 text-center">Add New Video</h2>
        <div className="mb-4 w-full">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4 w-full">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4 w-full">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="videoLink"
          >
            Video Link
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="videoLink"
            type="text"
            name="videoLink"
            placeholder="Video Link"
            value={formData.videoLink}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Video
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddVideoForm;
