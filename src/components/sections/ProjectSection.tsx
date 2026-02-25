"use client";

import ProjectCards from "../contents/ProjectCards";
import AnimationContainer from "../utils/AnimationContainer";
import Heading from "../utils/Heading";
import { Wrapper } from "../wrapper";
import { useLocalization } from "@/providers/localization-provider";

const ProjectSection = () => {
  const { localized } = useLocalization();

  return (
    <Wrapper>
      <div className="flex flex-col items-start w-full mt-0 lg:mt-8">
        <Heading title={localized["projects-page-title"]} />

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <p className="text-base text-justify lg:text-start lg:leading-8 text-neutral-200">
            {localized["projects-page-intro"]}
          </p>
        </AnimationContainer>

        <ProjectCards />
      </div>
    </Wrapper>
  );
};

export default ProjectSection;
