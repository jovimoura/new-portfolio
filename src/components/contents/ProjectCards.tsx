"use client";

import { Project as ProjectProps } from "@/types";
import Card from "../utils/Card";
import { projects } from "@/lib/data";
import { MagicCard } from "../ui/magic-card";
import { AnimationContainer } from "../animation-container";

const ProjectCards = () => {
  const data = projects;

  return (
    <AnimationContainer className="w-full flex flex-col">
      <div className="z-20 grid w-full grid-cols-1 gap-4 mx-auto lg:gap-5 sm:grid-cols-2">
        <>
          {data &&
            data?.map((project: ProjectProps, index) => (
              <AnimationContainer key={project.title} delay={0.2 * index + 0.1}>
                <MagicCard
                  className="p-2"
                  gradientSize={100}
                  gradientFrom="rgba(14,165,233,1)"
                  gradientTo="rgba(59,130,246,1)"
                >
                  <Card key={project.title} project={project} />
                </MagicCard>
              </AnimationContainer>
            ))}
        </>
      </div>
    </AnimationContainer>
  );
};

export default ProjectCards;
