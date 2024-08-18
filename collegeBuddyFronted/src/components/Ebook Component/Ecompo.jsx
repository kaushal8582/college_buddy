import React from 'react';
import {useNavigate} from "react-router-dom"
import { BASE_URL } from '../../../Helper';

const Ecompo = ({ img, id }) => {
  const navigate = useNavigate()

  const handleDownload = async () => {
    try {
      const datavalue = JSON.parse(localStorage.getItem("user"));
      const accessToken = datavalue?.accessToken;
      
      const response = await fetch(`${BASE_URL}/collegebuddy/api/v1/ebooks/ebookdownload/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        method: "GET",
      });

      if(response.status==401){
        navigate("/login")
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
      const a = document.createElement('a');
      a.href = data.data;
      a.download = 'ebook.pdf';  // Optional: Get the actual filename from response headers or other logic
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

    } catch (error) {
      console.log("ebook download error", error);
    }
  }

  return (
    <div className="w-[300px] shadow-lg rounded-lg overflow-hidden">
      <img loading='lazy' className="w-full h-56 object-cover" src={img} alt="Card Image" />
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

export default Ecompo;
