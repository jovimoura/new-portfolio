"use client";

import { CategoryProps } from '@/types';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import AnimationContainer from '../utils/AnimationContainer';
import { tags } from '@/lib/data';

const Tags = () => {

    const data = tags;

    const variants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    };

    const MotionButton = motion(Button);

    return (
        <AnimationContainer customClassName="w-full mt-5">
            <div className="flex gap-3 flex-wrap flex-row items-center w-full">

                    <>
                        {data && data?.map((tag: CategoryProps, index: number) => (
                            <MotionButton
                                key={index}
                                size="xs"
                                variant="outline"
                                initial="hidden"
                                animate="visible"
                                variants={variants}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.2, delay: index * 0.1 }}
                            >
                                {tag.name}
                            </MotionButton>
                        ))}
                    </>

            </div>
        </AnimationContainer>
    )
};

export default Tags
