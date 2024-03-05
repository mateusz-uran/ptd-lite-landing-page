import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Layout from "./Layout";

const LayoutWrapper = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default LayoutWrapper;
