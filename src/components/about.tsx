'use client'

import { AnimationContainer } from "./animation-container"
import { useLocalization } from "@/providers/localization-provider"

export const AboutMe = () => {
  const { localized } = useLocalization()
  return (
    <div className="w-full relative pt-10 pb-20 z-40">
      <AnimationContainer
        animation="slide-up"
        className="flex items-center justify-center overflow-hidden w-full mx-auto"
      >
        <div className="w-full">
          <h2 className="text-2xl lg:text-3xl font-medium text-left w-full">
            {localized['about-title']}
          </h2>
        </div>
      </AnimationContainer>
      <AnimationContainer
        animation="slide-up"
        className="flex items-center justify-center overflow-hidden w-full mx-auto pt-10"
      >
        <div className="w-full flex items-center justify-center">
          <p className="text-base md:text-lg text-justify w-full">
            {localized['about-body']}
          </p>
        </div>
      </AnimationContainer>
    </div>
  )
}
