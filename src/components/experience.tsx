'use client'

import { TimeLine, TimeLineItem } from "./exp-timeline"
import { useLocalization } from "@/providers/localization-provider"

const experienceIds = [
  { id: "atento", current: true },
  { id: "breaker19", current: false },
  { id: "fetchly", current: false },
  { id: "noclaf", current: false },
  { id: "portlouis", current: false },
  { id: "freelance", current: false },
] as const

export const Experience = () => {
  const { localized } = useLocalization()

  return (
    <div className="w-full relative pt-10 pb-20">
      <TimeLine>
        {experienceIds.map((item, i) => (
          <TimeLineItem
            key={item.id}
            active={item.current}
            last={experienceIds.length - 1 === i}
          >
            <TimeLineItem.Title>
              <span className="font-medium transition-all hover:text-white hover:underline hover:underline-offset-2">
                {localized[`experience-${item.id}-title` as keyof typeof localized]}
              </span>{" "}
              •{" "}
              <span className="text-neutral-200">
                {localized[`experience-${item.id}-period` as keyof typeof localized]}
              </span>
            </TimeLineItem.Title>
            <TimeLineItem.Description>
              {localized[`experience-${item.id}-description` as keyof typeof localized]}
            </TimeLineItem.Description>
          </TimeLineItem>
        ))}
      </TimeLine>
    </div>
  )
}
