import React, { useEffect } from "react";
import StudyPdf from "../stucomponent/StudyPdf";
import StudyVideo from "../stucomponent/StudyVideo";
import { useContext } from "react";
import myContext from "../../../components/context/myContext";
import Loader from "../../../components/Loader/Loader";

const StudyMaterial = () => {
  const context = useContext(myContext);
  const { allStudyMaterial, loader, setLoader } = context;

  return (
    <div className="min-h-screen bg-gray-100 p-4 pt-[120px]">
      {!loader ? (
        allStudyMaterial.length > 0 ? (
          <div>
            <div className="flex gap-2 flex-wrap items-center justify-center w-full">
              {allStudyMaterial.map((item)=>(
                <StudyPdf imgLink={item.thumbnail} key={item._id} id={item._id} />
              ))}
            
            </div>
          </div>
        ) : (
          <div className="w-full h-screen flex items-center justify-center">
            <h1 className="text-3xl">No study materials available</h1>
          </div>
        )
      ) : (
        <div className="w-full h-screen flex items-center justify-center" >
          <Loader />
        </div>
      )}
    </div>
  );
};

export default StudyMaterial;
