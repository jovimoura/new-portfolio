"use client";

import { motion } from 'framer-motion';
import { WordPullUp } from '../ui/word-pull-up';

interface Props {
    title: string
}

const Heading = ({ title }: Props) => {

    const variants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{
                type: "spring",
                bounce: 0.25,
                duration: 0.5,
            }}
            className="w-full mx-auto mb-8"
        >
            <WordPullUp
            className="mb-8 text-4xl md:text-5xl tracking-wide text-white !leading-[1.5] text-center font-semibold capitalize"
            words={title}
            />
        </motion.div>
    )
};

export default Heading
