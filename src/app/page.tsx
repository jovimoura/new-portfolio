import { GradientBackground } from '@/components';
import HomeSection from '@/components/sections/home';
import React from 'react';

const Home = () => {
    return (
        <GradientBackground>
            <main className="relative min-h-screen">
                <HomeSection />
            </main>
        </GradientBackground>
    )
};

export default Home;
