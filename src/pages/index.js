import React, { useState } from "react";
import Sidebar from "../LandingComponents/Sidebar";
import Navbar from "../LandingComponents/Navbar/index";
import Herosection from "../LandingComponents/HeroSection";
import InfoSection from "../LandingComponents/InfoSection";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../LandingComponents/InfoSection/data";
import Services from "../LandingComponents/Services";
import Footer from "../LandingComponents/footer";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Herosection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
