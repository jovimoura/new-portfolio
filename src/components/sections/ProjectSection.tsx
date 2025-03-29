import ProjectCards from '../contents/ProjectCards';
import AnimationContainer from '../utils/AnimationContainer';
import Heading from '../utils/Heading';
import { Wrapper } from '../wrapper';

const ProjectSection = () => {
    return (
        <Wrapper>
        <div className="flex flex-col items-start w-full mt-0 lg:mt-8">
            <Heading title="Projects" />

                <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
                    <p className="text-base text-justify lg:text-start lg:leading-8 text-neutral-200">
                    Here’s a collection of my work where I’ve turned ideas into real, working solutions. From useful tools for students to creative SaaS platforms, these projects show my love for building things that solve real problems with modern web and mobile technologies.
                    </p>
                </AnimationContainer>

                <ProjectCards />

            </div>
        </Wrapper>
    )
};

export default ProjectSection
