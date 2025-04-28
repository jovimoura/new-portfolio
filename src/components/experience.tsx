import { TimeLine, TimeLineItem } from "./exp-timeline";

const workExperience = [
  {
    title: "Software Engineer at Atento",
    period: "Dez 2024 - Current",
    description: `At Atento, I am responsible for working with Next.js on various
            products, such as Advanced Insights, which is essentially a system
            that uses artificial intelligence for companies with customer
            service departments. I built multi-language features and a report
            quality flow. I converted a large portion of the client components
            into server components, achieving a 40% performance boost. I
            implemented an AI-powered chat that allows the user to select an
            audio file and engage in a conversation or ask questions about that
            audio.`,
    current: true,
  },
  {
    title: "Software Engineer (Temporary) at Breaker19",
    period: "Aug 2024 - Nov 2024",
    description: ` Breaker19 is an efficient oilfield trucking & hotshot marketplace. I
            worked on the refactoring and maintenance of the driver and buyer
            apps using React Native, Expo, and Swift. I didn't limit myself to
            mobile development, but also contributed to the backend using
            Laravel and PostgreSQL.`,
    current: false,
  },
  {
    title: "Fullstack Develper at Fetchly Labs",
    period: "Sep 2023 - Jun 2024",
    description: ` Fetchly Labs is a Software House responsible for creating all kinds
            of web and mobile applications, always using the most modern
            frameworks and technologies. During my time at Fetchly, I worked as
            a Software Engineer developing E-commerce platforms such as
            CityWinery and MyTouring, mobile applications with React Native like
            Helper Heeves, and business websites like Freight130. I worked not
            only on the frontend with Angular, React, React Native, and Astro
            but also on the backend using Ruby on Rails and PostgreSQL, such as
            Home Loan Gurus.`,
    current: false,
  },
  {
    title: "Fullstack Develper at Noclaf Tech",
    period: "Mar 2022 - Sep 2023",
    description: `During my time at Noclaf Tech, I worked as a Fullstack Web
            Developer, developing systems for various companies in Brazil. I
            developed management and invoice issuance applications, e-commerce
            platforms, landing pages, and educational websites for children.`,
    current: false,
  },
  {
    title: "Frontend Developer at Port Louis",
    period: "Dec 2021 - Feb 2022",
    description: `Port Louis is a service automation company in the sectors of Legal
            Audits, Administration, Asset Pricing, and more. During my time at
            Port Louis, I worked as a Frontend Developer, developing new
            features, creating documentation, and unit tests. I worked on fixing
            various types of code errors, performed refactoring and updates in
            the code, transitioning components from Vue 2 to the Vue Composition
            API.`,
    current: false,
  },
  {
    title: "Freelance Developer",
    period: "Jun 2020 - Current",
    description: `I started my developer career as a Freelance Developer, creating
            landing pages and simple websites. Currently, I have clients for
            whom I offer maintenance and development services for their
            companies and small businesses. I have developed blogs, landing
            pages, mobile applications, and created some SaaS platforms using
            Next.js, React Native, Expo, Node, and Supabase.`,
    current: false,
  },
];

export const Experience = () => {
  return (
    <div className="w-full relative pt-10 pb-20">
      <TimeLine>
        {workExperience.map((workExp, i) => (
          <TimeLineItem key={workExp.title} active={workExp.current} last={workExperience.length - 1 === i}>
          <TimeLineItem.Title>
            <span className="font-medium transition-all hover:text-white hover:underline hover:underline-offset-2">
              {workExp.title}
            </span>{" "}
            • <span className="text-neutral-200">{workExp.period}</span>
          </TimeLineItem.Title>
          <TimeLineItem.Description>
            {workExp.description}
          </TimeLineItem.Description>
        </TimeLineItem>
        ))}
      </TimeLine>
    </div>
  );
};
