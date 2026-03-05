export const links = [
  { nameKey: "nav-home" as const, hash: "/" },
  { nameKey: "nav-about" as const, hash: "/about" },
  { nameKey: "nav-projects" as const, hash: "/projects" },
  { nameKey: "nav-blog" as const, hash: "/blog" },
  { nameKey: "nav-contact" as const, hash: "/contact" },
] as const;

export const projects = [
  {
    id: "yoresume",
    github: "https://www.yoresume.work/",
    view: "https://www.yoresume.work/",
    stack: ["nextjs", "tailwindcss", "typescript", "prisma", "mongodb", "zustand"],
    image: [{ url: "asdlasda" }],
    banner: "/projects/yoresume.png",
  },
  {
    id: "sevenlabz",
    github: "https://github.com/jovimoura/sevenlabs",
    view: "https://sevenlabz.vercel.app",
    stack: ["nextjs", "tailwindcss", "typescript", "trpc", "prisma", "postgresql", "shadcnui", "magic ui", "elevenlabsapi"],
    image: [{ url: "asdlasda" }],
    banner: "/projects/sevenlabz.png",
  },
  {
    id: "contrateai",
    github: "https://www.contrateai.com",
    view: "https://www.contrateai.com",
    stack: ["nextjs", "tailwindcss", "typescript", "trpc", "prisma", "postgresql", "openai"],
    image: [{ url: "asdlasda" }],
    banner: "/projects/contrateai.png",
  },
  {
    id: "mangajobs",
    github: "https://www.mangajobs.com/",
    view: "https://www.mangajobs.com/",
    stack: ["nextjs", "tailwindcss", "typescript", "prisma", "postgresql", "shadcn/ui"],
    image: [{ url: "asdlasda" }],
    banner: "/projects/mangajobs.png",
  }
];

export const tags = [
  { name: "nextjs", description: "nextjs description" },
  { name: "react", description: "nextjs description" },
  { name: "tailwindcss", description: "nextjs description" },
  { name: "react-native", description: "nextjs description" },
  { name: "typescript", description: "nextjs description" },
  { name: "tips", description: "tips description" },
];
