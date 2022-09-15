import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function (props) {
  return (
    <div className="d-flex justify-content-center">
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
}
