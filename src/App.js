import React from "react";
import Info from "./components/Info"
import About from "./components/About";
import Footer from "./components/Footer";
import Interests from "./components/Interests";
// import Navigation from "./components/Navigation";

export default function app() {
  return (
    <div>
        {/* <Navigation /> */}
        <Info />
        <About />
        <Interests />
        <Footer />
    </div>
  )
    
}