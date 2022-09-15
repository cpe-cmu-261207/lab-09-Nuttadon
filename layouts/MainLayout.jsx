import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function (props) {
  return (
    <div>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
}
