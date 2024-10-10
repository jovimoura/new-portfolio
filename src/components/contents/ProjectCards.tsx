"use client";

// import { getProjects } from '@/graphql';
import { Project as ProjectProps } from '@/types';
import { useEffect, useState } from 'react';
import { Skeleton } from '../ui/Skeleton';
import AnimationContainer from '../utils/AnimationContainer';
import Card from '../utils/Card';
import { projects } from '@/lib/data';

const ProjectCards = () => {

    // const [projects, setProjects] = useState<ProjectProps[]>([]);
    // const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     try {
    //         const fetchProjects = async () => {
    //             const data = await getProjects();
    //             setProjects(data);
    //             setIsLoading(false);
    //         };
    //         fetchProjects();
    //     } catch (error) {
    //         console.log(error);
    //         setIsLoading(false);
    //     }
    // }, []);

    const data = projects


    return (
        <AnimationContainer customClassName="w-full flex flex-col">

            <div className="z-20 grid w-full grid-cols-1 gap-4 mx-auto lg:gap-5 sm:grid-cols-2">

                    <>
                        {data && data?.map((project: ProjectProps) => (
                            <Card key={project.title} project={project} />
                        ))}
                    </>
            </div>
        </AnimationContainer>
    )
};

export default ProjectCards
