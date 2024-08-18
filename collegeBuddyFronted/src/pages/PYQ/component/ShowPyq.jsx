import React, { useEffect } from "react";
import Ecompo from "../../../components/Ebook Component/Ecompo";
import PyqCard from "./PyqCard";
import { useContext } from "react";
import myContext from "../../../components/context/myContext";

const ShowPyq = ({ findedPyq }) => {
  const context = useContext(myContext);
  const { allPyq } = context;


  return (
    <div className="w-full  border-t flex p-4 justify-center flex-wrap bg-white gap-10 items-center min-h-screen">
      {findedPyq.length <= 0 ? (
        allPyq.map((pyq) => (
          <PyqCard
            course={pyq.courseName}
            id={pyq._id}
            sem={pyq.semester}
            university={pyq.universityName}
            year={pyq.year}
            key={pyq._id}
          />
        ))
      ) : findedPyq.length > 1 ? (
        findedPyq.map((item) => (
          <PyqCard
            course={item.courseName}
            id={item._id}
            university={item.universityName}
            year={item.year}
          />
        ))
      ) : (
        <PyqCard
          course={findedPyq.courseName}
          id={findedPyq._id}
          university={findedPyq.universityName}
          year={findedPyq.year}
        />
      )}
    </div>
  );
};

export default ShowPyq;
