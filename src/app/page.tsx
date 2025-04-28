import HomeSection from "@/components/sections/home";
import GradientBackground from "@/components/utils/GradientBackground";
import React from "react";

const Home = () => {
  return (
    <GradientBackground>
      <main className="relative min-h-screen">
        <HomeSection />
      </main>
    </GradientBackground>
  );
};

export default Home;
