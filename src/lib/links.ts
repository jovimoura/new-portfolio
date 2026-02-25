import { BriefcaseIcon, HomeIcon, NotebookIcon } from "lucide-react";

export const LINKS = [
  { nameKey: "nav-home" as const, icon: HomeIcon, href: "/" },
  { nameKey: "nav-projects" as const, icon: BriefcaseIcon, href: "/projects" },
  { nameKey: "nav-blog" as const, icon: NotebookIcon, href: "/blog" },
];
