'use client'

import { format, parseISO } from 'date-fns'
import type { Locale } from 'date-fns/locale'
import { TimeLine, TimeLineItem } from './exp-timeline'
import { useLocalization } from '@/providers/localization-provider'
import { data } from '@/data'

function formatMonthYear(ym: string, locale: Locale) {
  const iso = ym.length === 7 ? `${ym}-01` : ym
  return format(parseISO(iso), 'MMM yyyy', { locale })
}

export const Experience = () => {
  const { locale, localizer, localized } = useLocalization()
  const experiences = data.experiences

  return (
    <div className="w-full relative pt-10 pb-20">
      <TimeLine>
        {experiences.map((experience, i) => {
          const startFormatted = formatMonthYear(experience.startDate, localizer)
          const endLabel = experience.current
            ? localized['experience-date-current' as keyof typeof localized]
            : experience.endDate
              ? formatMonthYear(experience.endDate, localizer)
              : null
          const period = endLabel ? `${startFormatted} - ${endLabel}` : startFormatted

          return (
            <TimeLineItem
              key={experience.id}
              active={experience.current}
              last={experiences.length - 1 === i}
            >
              <TimeLineItem.Title>
                <span className="font-medium transition-all hover:text-white hover:underline hover:underline-offset-2">
                  {experience.title[locale]}
                </span>
              </TimeLineItem.Title>
              <p className="text-neutral-200 text-sm -mt-0.5">
                {experience.company[locale]} — {period}
              </p>
              <TimeLineItem.Description>
                {experience.description[locale]}
              </TimeLineItem.Description>
              <TimeLineItem.Achievements items={experience.achievements[locale]} />
            </TimeLineItem>
          )
        })}
      </TimeLine>
    </div>
  )
}
