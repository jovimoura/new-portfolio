"use client";

// import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
// import AnimationContainer from './AnimationContainer';
import { AnimatedGrid } from '../ui/animated-grid';

const GradientBackground = ({ children }: { children: React.ReactNode }) => {

    // const controls = useAnimation();

    // useEffect(() => {
    //     let animationCancelled = false;

    //     const startAnimation = async () => {
    //         while (!animationCancelled) {
    //             await controls.start({
    //                 x: [0, 80, 0, -80, 0],
    //                 y: [0, -80, 0, 80, 0],
    //                 transition: { duration: 8, repeat: Infinity },
    //             });
    //         }
    //     };

    //     startAnimation();

    //     // Cleanup function to stop animation when the component is unmounted
    //     return () => {
    //         animationCancelled = true;
    //         controls.stop();
    //     };
    // }, [controls]);

    return (
        <div className="w-full relative min-h-screen">

            <div className="h-screen absolute z-0 w-full">
                <AnimatedGrid
                    numSquares={15}
                    maxOpacity={0.1}
                    duration={6}
                    className="inset-x-0 h-3/4 z-10"
                />

                <div className="bg-gradient-to-t from-background z-20 h-3/4 w-full absolute inset-x-0 top-[60% top-[10%]"></div>
            </div>

            <div className="aspect-square size-[280px] lg:size-[565px] absolute left-1/2 -translate-x-1/2 top-0 lg:top-[-200px] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(98,98,115,0.8)_0%,rgba(98,98,115,0)_100%)] rounded-full blur-[4rem] lg:blur-[14rem] z-10"></div>

            {children}
        </div>
    )
};

export default GradientBackground
