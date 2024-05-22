import React from "react";
import Main from "../tariel/main_section/Main";
import Section1 from "../components/section1/section1";
import Section2 from "../components/section2/section2";
import Section3 from "../components/section3/section3";
import Kitchen from "../tariel/kitchen/Kitchen";

const Sections = () => {
  return (
    <div>
      <Main />
      <Kitchen/>
      <Section1/>
      <Section2/>
      <Section3/>
    </div>
  );
};

export default Sections;
