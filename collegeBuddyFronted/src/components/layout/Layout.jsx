import React from "react";
import Nav from "../navComponent/Nav";
import Footer from "../footerComponents/FooterComponent";
import Bootom from "../bootom Nav/Bootom";

const Layout = ({ children }) => {
  return (
    <div className="" >
      <Nav />
      <Bootom/>
      <div className="">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
