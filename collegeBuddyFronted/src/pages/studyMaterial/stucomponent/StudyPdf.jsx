import React from "react";
import { toast } from "react-hot-toast";

const StudyPdf = ({ imgLink, id }) => {
  const handleDownload = async () => {
    try {
      toast.success("Click");
      const datavalue = JSON.parse(localStorage.getItem("user"));
      const accessToken = datavalue?.accessToken;

      const response = await fetch(
        `http://localhost:3000/collegebuddy/api/v1/studymaterial/downloadstudymaterial/${id}`,
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
      console.log("Study material download error", error);
    }
  };

  return (
    <div>
      <div className="mb-8">
        <div className="bg-white min-w-[300px] p-4 rounded-lg shadow-lg">
          <img
            loading="lazy"
            src={imgLink}
            alt="img"
            className="w-full h-40 object-cover mb-4 rounded"
          />
          <h4 className="text-xl font-semibold mb-2">kaushl</h4>

          <button
            onClick={handleDownload}
            className="bg-[#79B058] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full block text-center"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudyPdf;
