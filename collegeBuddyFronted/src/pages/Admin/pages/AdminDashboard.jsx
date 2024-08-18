import React, { useState } from "react";
import AdminProfile from "../component/adminProfile/AdminProfile";
import RightComponent from "../component/rightComponent/RightComponent";
import Ebook from "../component/Ebooks/Ebook";
import Layout from "../../../components/layout/Layout";
import Pyq from "../component/PYQ/Pyq";
import StudyMaterial from "../component/Add Study Material/StudyMaterial";
import { useNavigate } from "react-router-dom";
import Admin from "../component/video page/AdimiVideo.jsx"
import AddTeam from "../component/Add Team/pages/AddTeam.jsx";

const AdminDashboard = () => {
  const navigate = useNavigate()
  const [selectedSection, setSelectedSection] = useState("ebook");

  return (
    <Layout>
      <div className="w-full min-h-[100vh] bg-[#e7f1fb] pt-24">
        <div className="w-full h-[35vh]  border-2">
          <AdminProfile />
        </div>
        <div className="w-full min-h-[100vh] flex gap-2  justify-between max-lg-xs:justify-start max-lg-xs:flex-col">
          <div className="w-[20%] sm:w-[40%] lg:w-[20%] max-lg-xs:w-full max-lg-xs:h-[100px] ">
            <RightComponent setSelectedSection={setSelectedSection} />
          </div>
          <div className="w-[78%] sm:w-[60%] lg:w-[78%] max-lg-xs:w-full ">
            {selectedSection=== 'ebook' && <Ebook/>}
            {selectedSection=== 'pyq' && <Pyq/>}
            {selectedSection=== 'studymaterial' && <StudyMaterial/>}
            {selectedSection=== 'addvideo' && <Admin/>}
            {selectedSection=== 'team' && <AddTeam/>}
            {selectedSection=== 'addUniversity' && navigate("/adduniversityname")}
            {selectedSection=== 'addCourse' && navigate("/addcoursename")}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
