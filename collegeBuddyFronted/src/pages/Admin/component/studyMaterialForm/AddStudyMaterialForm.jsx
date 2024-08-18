import React, { useState } from "react";
import toast from "react-hot-toast";
import { useContext } from "react";
import myContext from "../../../../components/context/myContext";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../../../../Helper";

const AddStudyMaterialForm = () => {
  const context = useContext(myContext);
  const { allCourseName, allUniversityname } = context;

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    university: "",
    sem: "",
    materialType: "",
    materialLink: "",
    studyMaterialThumbnail: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
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
    formDataToSend.append("title", formData.title);
    formDataToSend.append("desc", formData.desc);
    formDataToSend.append("university", formData.university);
    formDataToSend.append("sem", formData.sem);
    formDataToSend.append("materialType", formData.materialType);
    formDataToSend.append("materialLink", formData.materialLink);
    formDataToSend.append(
      "studyMaterialThumbnail",
      formData.studyMaterialThumbnail
    );

    if (
      !formData.title ||
      !formData.desc ||
      !formData.materialLink ||
      !formData.materialType ||
      formData.materialType == "null" ||
      !formData.studyMaterialThumbnail ||
      !formData.university ||
      formData.university == "null" ||
      !formData.sem ||
      formData.sem == "null"
    ) {
      return toast.error("all fields are required");
    }

    console.log(formDataToSend);
    try {
      const datavalue = JSON.parse(localStorage.getItem("user"));
      const accessToken = datavalue?.accessToken;

      const response = await fetch(
        `${BASE_URL}/collegebuddy/api/v1/studymaterial/uploadstudymaterial`,
        {
          headers: {
            // "Content-Type": "multipart/form-data; boundary=<calculated when request is sent>",
            Authorization: `Bearer ${accessToken}`,
          },
          method: "POST",
          body: formDataToSend,
        }
      );

      const data = await response.json();
      if (response.status == 200) {
        toast.success("Study materail add succesfully");
        navigate("/admindashboard");
      }
      return;
    } catch (error) {
      toast.error("Add study materail faield");
      console.log(error);
      return;
    }
    // Handle form submission
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-700 p-6">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Add Study Material
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Title */}
          <div className="mb-4  w-full">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              value={formData.title}
              onChange={handleChange}
              className="block w-full border border-gray-300 rounded-md p-2"
              placeholder="Title"
            />
          </div>

          {/* Description */}
          <div className="mb-4 w-full">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="desc"
            >
              Description
            </label>
            <textarea
              id="desc"
              name="desc"
              value={formData.desc}
              onChange={handleChange}
              className="block w-full border border-gray-300 rounded-md p-2"
              placeholder="Description"
            />
          </div>

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
              name="university"
              value={formData.university}
              onChange={handleChange}
              className="block w-full border border-gray-300 rounded-md p-2"
            >
              <option value="">Select University</option>
              {allUniversityname.map((item)=>(
                <option value={item.name}>{item.name}</option>
              ))};
             
            </select>
          </div>

          {/* sem */}
          <div className="mb-4 w-full">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="sem"
            >
              sem
            </label>
            <select
              id="sem"
              name="sem"
              value={formData.sem}
              onChange={handleChange}
              className="block w-full border border-gray-300 rounded-md p-2"
            >
              <option value="">Select sem</option>
              <option value="1">1st sem</option>
              <option value="2">2nd sem</option>
              <option value="3">3rd sem</option>
              <option value="4">4th sem</option>
              <option value="5">5th sem</option>
              <option value="6">6th sem</option>
              <option value="7">7th sem</option>
              <option value="8">8th sem</option>
            </select>
          </div>

          {/* Material Type */}
          <div className="mb-4 w-full">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="materialType"
            >
              Material Type
            </label>
            <select
              id="materialType"
              name="materialType"
              value={formData.materialType}
              onChange={handleChange}
              className="block w-full border border-gray-300 rounded-md p-2"
            >
              <option value="">Select Material Type</option>
              <option value="img">Image</option>
              <option value="video">Video</option>
              <option value="pdf">PDF</option>
            </select>
          </div>

          {/* Material File */}
          <div className="mb-4 w-full">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="material"
            >
              Material Link
            </label>
            <input
              placeholder="Paste Study material link"
              id="material"
              name="materialLink"
              type="text"
              value={formData.materialLink}
              onChange={handleChange}
              className="block w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          {/* Thumbnail */}
          <div className="mb-4 w-full">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="thumbnail"
            >
              Thumbnail
            </label>
            <input
              id="studyMaterialThumbnail"
              name="studyMaterialThumbnail"
              type="file"
              onChange={handleFileChange}
              className="block w-full border border-gray-300 rounded-md p-2"
              accept=".jpg,.jpeg,.png"
            />
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add Study Material
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudyMaterialForm;
