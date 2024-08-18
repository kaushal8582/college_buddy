import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const PyqCard = ({ id, university, course, year, sem }) => {
  const navigate = useNavigate();
  
  const handleDownload = async () => {
    try {
      toast.success("click");

      const datavalue = JSON.parse(localStorage.getItem("user"));
      const accessToken = datavalue?.accessToken;
      console.log(id);
      console.log(accessToken)
      const response = await fetch(
        `http://localhost:3000/collegebuddy/api/v1/pyq/downloadpyq/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          method: "POST",
        }
      );


      if (response.status == 401) {
        navigate("/login");
      }
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // If the response is JSON (which is unexpected for a file download):
      const data = await response.json();
      console.log(data.data);

      // Handle file download
      // const blob = await response.bl ob();
      // const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = data.data;
      a.download = "ebook.pdf"; // Optional: Get the actual filename from response headers or other logic
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.log("ebook download error", error);
    }
  };

  return (
    <div className="w-[300px] shadow-xl border-2 rounded-lg overflow-hidden">
      <div className="w-full h-[80%] flex flex-col p-2">
        <h3>{university} </h3>
        <h3>{course} </h3>
        <h3>
          semester : <span>{sem}th</span>{" "}
        </h3>
        <h3>
          Year : <span>{year}</span>{" "}
        </h3>
      </div>
      <div className="p-4">
        <button
          onClick={handleDownload}
          className="w-full bg-[#79B058] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default PyqCard;
