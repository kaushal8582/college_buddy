import React, { useContext } from "react";
import Ecompo from "./Ecompo";
import myContext from "../context/myContext";
import Loader from "../../components/Loader/Loader";

const EbookComponent = () => {
  const context = useContext(myContext);

  const { allEbook, loader, setLoader } = context;

  return (
    <div className="flex pt-[120px] justify-center flex-wrap bg-white gap-10 items-center min-h-screen">
      {!loader ? (
        allEbook.map((book) => (
          <Ecompo img={book.thumbnail} id={book._id} key={book._id} />
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default EbookComponent;
