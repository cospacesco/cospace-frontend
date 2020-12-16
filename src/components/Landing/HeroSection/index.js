import React, { useState } from "react";
import { Button } from "../ButtonElement";
import Imgbg from "../../images/hero-bg.png";
import {
  HeroContainer,
  HeroBg,
  ImgBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroSectionElements";
const Herosection = () => {
  const [hover, SetHover] = useState(false);

  const onHover = () => {
    SetHover(!hover);
  };
  return (
    <HeroContainer>
      <HeroBg>
        <ImgBg src={Imgbg} type="image" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Community Spaces</HeroH1>
        <HeroP>Sign up and join your Community(s) Space.</HeroP>
        <HeroBtnWrapper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Herosection;
