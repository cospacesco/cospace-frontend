import { FaLeaf } from "react-icons/fa";
import image1 from "../../images/svg-1.svg";
import image2 from "../../images/svg-2.svg";
import image3 from "../../images/svg-3.svg";

export const homeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Community Spaces",
  headLine: "Find & Join your communities",
  description:
    "Participate in events and see how you match up with your peers in the event.",
  buttonLabel: "Get started",
  imgStart: false,
  img: image1,
  alt: "Car",
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  id: "discover",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "For Communities",
  headLine: "Create your space & Invite your members",
  description:
    "We'll allocate you a space. All you need to do is invite your members & list your events.",
  buttonLabel: "Learn More",
  imgStart: true,
  img: image3,
  alt: "piggybank",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id: "signup",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Join In",
  headLine: "Be part of our Community of Communities",
  description:
    "List your community and invite your members. Schedule your events and see the magic happen!.",
  buttonLabel: "Start Now",
  imgStart: false,
  img: image2,
  alt: "paper",
  dark: false,
  primary: false,
  darkText: true,
};
