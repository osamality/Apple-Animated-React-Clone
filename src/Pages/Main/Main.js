import React from "react";

import appletv from "../../images/icons/apple-tv-logo.png";
import banker from "../../images/home/banker.png";
import series5 from "../../images/icons/watch-series5-logo.png";
import arcade from "../../images/icons/arcade.png";
import Youtube from "../../Components/Youtube/Youtube";

import AnimatedModel from "../../Components/Animated/AnimatedModel";
import Section1 from "../../Components/Section/Section1";
import Section2 from "../../Components/Section/Section2";
import Section3 from "../../Components/Section/Section3";
import Section4 from "../../Components/Section/Section4";
import Section5 from "../../Components/Section/Section5";

function Main() {
  return (
    <>
      <Section1 />
      {/* <AnimatedModel /> */}
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </>
  );
}

export default Main;
