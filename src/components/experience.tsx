import { TimeLine, TimeLineItem } from "./exp-timeline";


export const Experience = () => {
    return (
        <div className="w-full relative pt-10 pb-20">
            <TimeLine>
                <TimeLineItem active>
                    <TimeLineItem.Title>
                        <span className="font-medium transition-all hover:text-white hover:underline hover:underline-offset-2">
                        Software Engineer at Atento 
                        </span>
                        {" "}•{" "}
                        <span className="text-neutral-200">
                            Dez 2024 - Current
                        </span>
                    </TimeLineItem.Title>
                    <TimeLineItem.Description>
                    At Atento, I am responsible for working with Next.js on various products, such as Advanced Insights, which is
essentially a system that uses artificial intelligence for companies with customer service departments.
I built multi-language features and a report quality flow.
I converted a large portion of the client components into server components, achieving a 40% performance
boost.
I implemented an AI-powered chat that allows the user to select an audio file and engage in a conversation or
ask questions about that audio.

                    </TimeLineItem.Description>
                </TimeLineItem>

                <TimeLineItem>
                    <TimeLineItem.Title>
                        <span className="font-medium transition-all hover:text-white hover:underline hover:underline-offset-2">
                        Software Engineer (Temporary) at Breaker19 
                        </span>
                        {" "}•{" "}
                        <span className="text-neutral-200">
                        Aug 2024 - Nov 2024
                        </span>
                    </TimeLineItem.Title>
                    <TimeLineItem.Description>
                    Breaker19 is an efficient oilfield trucking & hotshot marketplace. I worked on the refactoring and maintenance of the driver and buyer apps using React Native, Expo, and Swift. I didn't limit myself to mobile development, but also contributed to the backend using Laravel and PostgreSQL.
                    </TimeLineItem.Description>
                </TimeLineItem>

                <TimeLineItem>
                    <TimeLineItem.Title>
                        <span className="font-medium transition-all hover:text-white hover:underline hover:underline-offset-2">
                        Fullstack Develper at Fetchly Labs
                        </span>
                        {" "}•{" "}
                        <span className="text-neutral-200">
                        Sep 2023 - Jun 2024
                        </span>
                    </TimeLineItem.Title>
                    <TimeLineItem.Description>
                    Fetchly Labs is a Software House responsible for creating all kinds of web and mobile applications, always using the most modern frameworks and technologies.

                    During my time at Fetchly, I worked as a Software Engineer developing E-commerce platforms such as CityWinery and MyTouring, mobile applications with React Native like Helper Heeves, and business websites like Freight130.

                    I worked not only on the frontend with Angular, React, React Native, and Astro but also on the backend using Ruby on Rails and PostgreSQL, such as Home Loan Gurus.
                    </TimeLineItem.Description>
                </TimeLineItem>

                <TimeLineItem>
                    <TimeLineItem.Title>
                        <span className="font-medium transition-all hover:text-white hover:underline hover:underline-offset-2">
                        Fullstack Develper at Noclaf Tech
                        </span>
                        {" "}•{" "}
                        <span className="text-neutral-200">
                        Mar 2022 - Sep 2023
                        </span>
                    </TimeLineItem.Title>
                    <TimeLineItem.Description>
                    During my time at Noclaf Tech, I worked as a Fullstack Web Developer, developing systems for various companies in Brazil.

                    I developed management and invoice issuance applications, e-commerce platforms, landing pages, and educational websites for children.
                    </TimeLineItem.Description>
                </TimeLineItem>

                <TimeLineItem>
                    <TimeLineItem.Title>
                        <span className="font-medium transition-all hover:text-white hover:underline hover:underline-offset-2">
                        Frontend Developer at Port Louis
                        </span>
                        {" "}•{" "}
                        <span className="text-neutral-200">
                        Dec 2021 - Feb 2022
                        </span>
                    </TimeLineItem.Title>
                    <TimeLineItem.Description>
                    Port Louis is a service automation company in the sectors of Legal Audits, Administration, Asset Pricing, and more.

During my time at Port Louis, I worked as a Frontend Developer, developing new features, creating documentation, and unit tests.

I worked on fixing various types of code errors, performed refactoring and updates in the code, transitioning components from Vue 2 to the Vue Composition API.
                    </TimeLineItem.Description>
                </TimeLineItem>

                <TimeLineItem last>
                    <TimeLineItem.Title>
                        <span className="font-medium transition-all hover:text-white hover:underline hover:underline-offset-2">
                        Freelance Developer
                        </span>
                        {" "}•{" "}
                        <span className="text-neutral-200">
                            Jun 2020 - Current
                        </span>
                    </TimeLineItem.Title>
                    <TimeLineItem.Description>
                    I started my developer career as a Freelance Developer, creating landing pages and simple websites. Currently, I have clients for whom I offer maintenance and development services for their companies and small businesses.

                    I have developed blogs, landing pages, mobile applications, and created some SaaS platforms using Next.js, React Native, Expo, Node, and Supabase.
                    </TimeLineItem.Description>
                </TimeLineItem>
            </TimeLine>
        </div>
    );
};
