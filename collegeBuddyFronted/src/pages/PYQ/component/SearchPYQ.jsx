import React, { useState } from 'react';
import { toast } from "react-hot-toast";
import { useContext } from 'react';
import myContext from '../../../components/context/myContext';
import { BASE_URL } from '../../../../Helper';


const SearchPYQ = ({ setFindedPyq }) => {

  const context = useContext(myContext)
  const {allCourseName,allUniversityname} = context


  const [formData, setFormData] = useState({
    universityName: '',
    semester: '',
    courseName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const { universityName, semester, courseName } = formData;
      if (!universityName || !semester || !courseName) {
        return toast.error("All fields are required");
      }

      const response = await fetch(`${BASE_URL}/collegebuddy/api/v1/pyq/findpyq`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(formData),
      });

      if(response.status==400){
        return toast.error("Question not found")
      }

      const data = await response.json();
      console.log(data.data);
      setFindedPyq(data.data);

      toast.success("Questio find successfully");

    } catch (error) {
      toast.error("Pyq find error");
      console.log(error);
      return;
    }
  };

  return (
    <div className="pt-[120px] flex items-center justify-center bg-white">
      <form className="bg-white p-6 rounded-lg shadow-lg w-full" onSubmit={handleSearch}>
        <div className='flex max-md-xs:flex-wrap items-center justify-center gap-2'>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="university">
              University
            </label>
            <select
              id="university"
              name="universityName"
              value={formData.universityName}
              onChange={handleChange}
              className="shadow appearance-none border rounded min-w-[150px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select University</option>
              {allUniversityname.map((item)=>(
                <option value={item.name}>{item.name}</option>

              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="semester">
              Semester
            </label>
            <select
              id="semester"
              name="semester"
              value={formData.semester}
              onChange={handleChange}
              className="shadow appearance-none border rounded min-w-[150px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select Semester</option>
              <option value="1">Semester 1</option>
              <option value="2">Semester 2</option>
              <option value="3">Semester 3</option>
              <option value="4">Semester 4</option>
              <option value="5">Semester 5</option>
              <option value="6">Semester 6</option>
              <option value="7">Semester 7</option>
              <option value="8">Semester 8</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="course">
              Course
            </label>
            <select
              id="course"
              name="courseName"
              value={formData.courseName}
              onChange={handleChange}
              className="shadow appearance-none border rounded min-w-[150px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select Course</option>
              {allCourseName.map((item)=>(
                <option value={item.name}>{item.name}</option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchPYQ;
