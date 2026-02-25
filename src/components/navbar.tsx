"use client";

import { LINKS } from "@/lib/links";
import { cn } from "@/lib/utils";
import { FileTextIcon } from "lucide-react";
import Link from "next/link";

import { Dock, DockIcon } from "./ui/dock";
import Icons from "./ui/icons";
import { Separator } from "./ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/Tooltip";
import { AnimationContainer } from "./animation-container";
import { buttonVariants } from "./ui/Button";
import { LangSwitcher } from "./lang-switcher";
import { useLocalization } from "@/providers/localization-provider";

const DATA = {
  navbar: LINKS,
  contact: {
    social: {
      github: {
        nameKey: "nav-github" as const,
        url: "https://github.com/jovimoura",
        icon: Icons.github,
      },
      linkedin: {
        nameKey: "nav-linkedin" as const,
        url: "https://linkedin.com/in/jovimoura10",
        icon: Icons.linkedin,
      },
      youtube: {
        nameKey: "nav-youtube" as const,
        url: "https://www.youtube.com/@ojohndev",
        icon: Icons.youtube,
      },
      resume: {
        nameKey: "nav-resume" as const,
        url: "/john-moura-resume-pt.pdf", // base; overridden by locale in component
        icon: FileTextIcon,
      },
    },
  },
};

const getResumeUrl = (locale: string) =>
  locale === "pt-BR" ? "/john-moura-resume-pt.pdf" : "/john-moura-resume-en.pdf";

export const Navbar = () => {
  const { localized, locale } = useLocalization();

  return (
    <header className="z-[999] flex justify-center items-center w-full fixed bottom-6 inset-x-0 cursor-none">
      <div className="w-full h-16 bg-gradient-to-t from-background absolute -bottom-8 inset-x-0 -z-10"></div>

      <AnimationContainer animation="slide-up" delay={0.5}>
        <TooltipProvider delayDuration={0}>
          <Dock direction="middle" className="relative">
            {DATA.navbar.map((item) => (
              <DockIcon key={item.nameKey}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.href}
                      aria-label={localized[item.nameKey]}
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "size-10 rounded-xl"
                      )}
                    >
                      <item.icon className="size-4" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent sideOffset={10} className="px-2 py-1 text-xs">
                    <p>{localized[item.nameKey]}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            ))}
            <Separator orientation="vertical" className="h-full" />
            {Object.entries(DATA.contact.social).map(([name, social]) => (
              <DockIcon key={name}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={
                        name === "resume"
                          ? getResumeUrl(locale)
                          : social.url!
                      }
                      target="_blank"
                      aria-label={localized[social.nameKey]}
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "size-12 rounded-xl"
                      )}
                    >
                      <social.icon className="size-4" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{localized[social.nameKey]}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            ))}
            <Separator orientation="vertical" className="h-full" />
            <LangSwitcher />
          </Dock>
        </TooltipProvider>
      </AnimationContainer>
    </header>
  );
};
