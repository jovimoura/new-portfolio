"use client";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/Tooltip";
import { motion } from 'framer-motion';
import { SiNextdotjs, SiNodedotjs, SiReact, SiRedux, SiTailwindcss, SiTypescript, SiTrpc, SiMongodb, SiPrisma, SiVuedotjs, SiAngular, SiRemix } from "react-icons/si";

export const AllFavTechs = () => {

    const animation = {
        hide: { x: -8, opacity: 0 },
        show: { x: 0, opacity: 1 }
    };

    return (
        <>
            <motion.p
                initial={animation.hide}
                animate={animation.show}
                transition={{ delay: 0.2 }}
                className="text-4xl lg:text-5xl font-medium text-foreground/80"
            >
                My current favorite tech stack:
            </motion.p>

            <TooltipProvider delayDuration={0}>
                <motion.ul
                    initial="hide"
                    animate="show"
                    transition={{ delayChildren: 0.2, staggerChildren: 0.05 }}
                    className="flex flex-wrap items-center justify-center mx-auto gap-x-5 lg:mx-0"
                >
                    <motion.li
                        variants={animation}
                        className="opacity-100"
                    >
                        <Tooltip>
                            <TooltipTrigger>
                                <div className="transition duration-300 ease-out text-neutral-700 hover:text-white">
                                    <SiNextdotjs className="w-10 h-10" />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Next.js</p>
                            </TooltipContent>
                        </Tooltip>
                    </motion.li>
                    <motion.li
                        variants={animation}
                        className="opacity-100"
                    >
                        <Tooltip>
                            <TooltipTrigger>
                                <div className="transition duration-300 ease-out text-neutral-700 hover:text-[#61DAFB]">
                                    <SiReact className="w-10 h-10" />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>React</p>
                            </TooltipContent>
                        </Tooltip>
                    </motion.li>
                    <motion.li
                        variants={animation}
                        className="opacity-100"
                    >
                        <Tooltip>
                            <TooltipTrigger>
                                <div className="transition duration-300 ease-out text-neutral-700 hover:text-[#42b883]">
                                    <SiVuedotjs className="w-10 h-10" />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>VueJS</p>
                            </TooltipContent>
                        </Tooltip>
                    </motion.li>
                    <motion.li
                        variants={animation}
                        className="opacity-100"
                    >
                        <Tooltip>
                            <TooltipTrigger>
                                <div className="transition duration-300 ease-out text-neutral-700 hover:text-[#f637e3]">
                                    <SiAngular className="w-10 h-10" />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Angular</p>
                            </TooltipContent>
                        </Tooltip>
                    </motion.li>
                    <motion.li
                        variants={animation}
                        className="opacity-100"
                    >
                        <Tooltip>
                            <TooltipTrigger>
                                <div className="transition duration-300 ease-out text-neutral-700 hover:text-[#f44251]">
                                    <SiRemix className="w-10 h-10" />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Remix</p>
                            </TooltipContent>
                        </Tooltip>
                    </motion.li>
                    <motion.li
                        variants={animation}
                        className="opacity-100"
                    >
                        <Tooltip>
                            <TooltipTrigger>
                                <div className="transition duration-300 ease-out text-neutral-700 hover:text-[#3178C6]">
                                    <SiTypescript className="w-10 h-10" />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Typescript</p>
                            </TooltipContent>
                        </Tooltip>
                    </motion.li>
                    <motion.li
                        variants={animation}
                        className="opacity-100"
                    >
                        <Tooltip>
                            <TooltipTrigger>
                                <div className="transition duration-300 ease-out text-neutral-700 hover:text-[#38B2AC]">
                                    <SiTailwindcss className="w-10 h-10" />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Tailwind CSS</p>
                            </TooltipContent>
                        </Tooltip>
                    </motion.li>
                    <motion.li
                        variants={animation}
                        className="opacity-100"
                    >
                        <Tooltip>
                            <TooltipTrigger>
                                <div className="transition duration-300 ease-out text-neutral-700 hover:text-[#8CC84B]">
                                    <SiNodedotjs className="w-10 h-10" />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Node.js</p>
                            </TooltipContent>
                        </Tooltip>
                    </motion.li>
                    <motion.li
                        variants={animation}
                        className="opacity-100"
                    >
                        <Tooltip>
                            <TooltipTrigger>
                                <div className="transition duration-300 ease-out text-neutral-700 hover:text-[#764ABC]">
                                    <SiRedux className="w-10 h-10" />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Redux</p>
                            </TooltipContent>
                        </Tooltip>
                    </motion.li>
                    <motion.li
                        variants={animation}
                        className="opacity-100"
                    >
                        <Tooltip>
                            <TooltipTrigger>
                                <div className="transition duration-300 ease-out text-neutral-700 hover:text-[#16a394]">
                                    <SiPrisma className="w-10 h-10" />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Prisma</p>
                            </TooltipContent>
                        </Tooltip>
                    </motion.li>
                </motion.ul>
            </TooltipProvider>
        </>
    )
};

