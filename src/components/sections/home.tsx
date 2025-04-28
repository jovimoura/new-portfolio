import React from "react";

import { Wrapper } from "../wrapper";
import { Hero } from "../hero";
import { AboutMe } from "../about";
import { Experience } from "../experience";
import { Projects } from "../projects";
import MySkills from "../contents/MySkills";
import { Contact } from "../contact";

const HomeSection = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center relative">
      <Wrapper className="lg:max-w-screen-lg">
        <Hero />
      </Wrapper>
      <Wrapper>
        <AboutMe />
      </Wrapper>
      <Wrapper>
        <Experience />
      </Wrapper>
      <Wrapper>
        <Projects />
      </Wrapper>
      <Wrapper>
        <MySkills />
      </Wrapper>
      <Wrapper>
        <Contact />
      </Wrapper>
    </div>
  );
};

export default HomeSection;
