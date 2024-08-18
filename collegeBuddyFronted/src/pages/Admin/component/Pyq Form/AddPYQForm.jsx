import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import mycontext from "../../../../components/context/myContext.jsx";
import { BASE_URL } from "../../../../../Helper.jsx";

const AddPYQForm = () => {
  const context = useContext(mycontext);

  const { allCourseName, allUniversityname } = context;

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    universityName: "",
    semester: "",
    year: "",
    courseName: "",
    questionLink: "",
    image: null,
  });

  // Handle input change for text fields and selects
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle file input change
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files.length > 0 ? files[0] : null,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for empty fields
    if (
      !formData.universityName ||
      !formData.semester ||
      !formData.year ||
      !formData.courseName ||
      !formData.questionLink ||
      !formData.image
    ) {
      return toast.error("All fields are required");
    }

    // Prepare form data for submission
    const formDataToSend = new FormData();
    formDataToSend.append("universityName", formData.universityName);
    formDataToSend.append("semester", formData.semester);
    formDataToSend.append("year", formData.year);
    formDataToSend.append("courseName", formData.courseName);
    formDataToSend.append("questionLink", formData.questionLink);
    formDataToSend.append("image", formData.image);

    try {
      const datavalue = JSON.parse(localStorage.getItem("user"));
      const accessToken = datavalue?.accessToken;

      // Make the POST request to upload the form data
      const response = await fetch(
        `${BASE_URL}/collegebuddy/api/v1/pyq/uploadpyq`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          body: formDataToSend,
        }
      );

      // Handle response
      if (response.ok) {
        toast.success("Uploaded PYQ successfully");
        setFormData({
          universityName: "",
          semester: "",
          year: "",
          courseName: "",
          questionLink: "",
          image: null,
        });
        navigate("/admindashboard");
      } else {
        const errorData = await response.json();
        toast.error(`Upload failed: ${errorData.message}`);
      }
    } catch (error) {
      toast.error("Failed to add PYQ");
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-500  flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Add PYQ</h2>
        <form onSubmit={handleSubmit}>
          {/* University Name */}
          <div className="mb-4 w-full">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="university"
            >
              University Name
            </label>
            <select
              id="university"
              name="universityName"
              value={formData.universityName}
              onChange={handleChange}
              className="block w-full border border-gray-300 rounded-md p-2"
            >
              <option value="">Select University</option>

              {allUniversityname.map((item) => (
                <option value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          {/* Semester */}
          <div className="mb-4 w-full">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="semester"
            >
              Semester
            </label>
            <select
              id="semester"
              name="semester"
              value={formData.semester}
              onChange={handleChange}
              className="block w-full border border-gray-300 rounded-md p-2"
            >
              <option value="">Select Semester</option>
              <option value="1">1st Semester</option>
              <option value="2">2nd Semester</option>
              <option value="3">3rd Semester</option>
              <option value="4">4th Semester</option>
              <option value="5">5th Semester</option>
              <option value="6">6th Semester</option>
              <option value="7">7th Semester</option>
              <option value="8">8th Semester</option>
            </select>
          </div>

          {/* Year */}
          <div className="mb-4 w-full">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="year"
            >
              Year
            </label>
            <input
              id="year"
              name="year"
              type="number"
              value={formData.year}
              onChange={handleChange}
              className="block w-full border border-gray-300 rounded-md p-2"
              placeholder="Year"
            />
          </div>

          {/* Course Name */}
          <div className="mb-4 w-full">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="course"
            >
              Course Name
            </label>
            <select
              id="course"
              name="courseName"
              value={formData.courseName}
              onChange={handleChange}
              className="block w-full border border-gray-300 rounded-md p-2"
            >
              <option value="">Select Course</option>

              {allCourseName.map((item)=>(
                <option value={item.name}>{item.name}</option>
              ))}
            </select>
          </div>

          {/* Question Link */}
          <div className="mb-4 w-full">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="questionLink"
            >
              Question Link
            </label>
            <input
              id="questionLink"
              name="questionLink"
              type="text"
              placeholder="Paste question link"
              onChange={handleChange}
              value={formData.questionLink}
              className="block w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          {/* College Logo */}
          <div className="mb-4 w-full">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="image"
            >
              College Logo
            </label>
            <input
              id="image"
              name="image"
              type="file"
              onChange={handleFileChange}
              className="block w-full border border-gray-300 rounded-md p-2"
              accept=".png,.jpg"
            />
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add PYQ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPYQForm;
