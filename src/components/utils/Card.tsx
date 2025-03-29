import { Project as ProjectProps } from '@/types';
import { Badge } from '@mantine/core';
import Link from 'next/link';
import { SiGithub } from "react-icons/si";
import { TbExternalLink } from "react-icons/tb";
import { Button } from '../ui/Button';
import AnimationContainer from './AnimationContainer';
import Image from 'next/image';
import Icons from '../ui/icons';

const techStackIcons: { [key: string]: keyof typeof Icons } = {
    "next.js": "nextjs",
    "nextjs": "nextjs",
    "tailwindcss": "tailwindcss",
    "tailwind": "tailwindcss",
    "framer motion": "framer",
    "framer-motion": "framer",
    "shadcn/ui": "shadcn",
    "shadcn ui": "shadcn",
    "shadcnui": "shadcn",
    "mongodb": "mongodb",
    "prisma": "prisma",
    "magic ui": "magicui",
    "expo": "expo",
    "firebase": "firebase",
    "figma": "figma",
    "clerk": "clerk",
    "react native": "react",
    "react-native": "react",
    "aws(ses)": "aws",
    "zustand": "zustand",
    "gemini": "gemini",
};

const getIconForTech = (tech: string) => {
    const normalizedTech = tech.toLowerCase();
    const iconKey = techStackIcons[normalizedTech];
    if (iconKey && Icons[iconKey]) {
        const Icon = Icons[iconKey];
        return <Icon className="size-3 mr-1" />;
    }
    return null;
};

interface Props {
    project: ProjectProps;
}

const Card = ({ project }: Props) => {
    return (
        
            <div className="flex-col items-start p-4 lg:p-5">
                <div className="flex flex-col items-start space-y-2">
                <Image className='rounded-2xl w-full' width={295} height={160} alt={`${project.title}-image`} src={project?.banner} />
                    <h4 className="text-lg font-medium text-neutral-100">
                        {project?.title}
                    </h4>
                    <p className="text-sm text-neutral-300">
                        {project?.description}
                    </p>
                    <div className="flex flex-col items-start justify-start space-y-4 w-full">
                        <div className="flex items-center justify-start flex-wrap gap-2">
                            {project?.stack?.map((item, index) => (
                               <Badge
                               key={index}
                               size="md"
                               radius="md"
                               variant="outline"
                               color="dark"
                               className="transition-colors duration-300 ease-in-out py-1 ![--badge-height:1.5rem] bg-neutral-600/70 hover:bg-neutral-700"
                           >
                               <span className="font-medium text-white flex items-center">
                                   {getIconForTech(item)}
                                   {item}
                               </span>
                           </Badge>
                            ))}
                        </div>
                        <div className="flex items-end gap-2">
                            <Link href={project.github} target="_blank">
                                <Button variant="outline" size="sm">
                                    <SiGithub className="w-5 h-5" />
                                    <span className="ml-2">
                                        Github
                                    </span>
                                </Button>
                            </Link>
                            <Link href={project.view} target="_blank">
                                <Button variant="outline" size="sm">
                                    <TbExternalLink className="w-5 h-5" />
                                    <span className="ml-2">
                                        View
                                    </span>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


    )
};

export default Card
