import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

import myAvatar from "./img.jpg";

export const RESUME_DATA = {
  name: "Diyari Mohammed Zrar",
  initials: "BJ",
  location: "Rasty, Erbil, Kurdistan",
  locationLink: "https://www.google.com/maps/place/Erbil",
  about:
    "MERN Stack Engineer focused on building products with extra attention to detail",
  summary:
    "As a MERN Stack Engineer, Currently, I work mostly with Javascript, React, Node.js, and Express.js. I have over 1+ years of experience working freelance, and in the field for 3+ years total.  During this time, I've tackled projects both independently and collaboratively, demonstrating my ability to work effectively in both settings. Additionally, I'm currently in the 3rd stage of my Information Systems Engineering degree, which provides me with a strong foundation in the technical and theoretical aspects of software development.",
  avatarUrl: myAvatar.src,
  personalWebsiteUrl: "https://diyari.netlify.app/",
  contact: {
    email: "diyarimohammed33@gmail.com",
    tel: "+9647724326150",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/diyarim123",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/diyari-mohammed-3a2122228/",
        icon: LinkedInIcon,
      }
    ],
  },
  education: [
    {
      school: "Erbil Polytechnic University",
      degree: "3rd Stage of Bechelor's degree in Information System Engineering",
      start: "2021",
      end: "2025",
    },
  ],
  work: [
    {
      company: "Freelance",
      link: "https://www.freelancer.com/u/XxMarshallxX",
      badges: [],
      title: "MERN Stack Developer",
      logo: NSNLogo,
      start: "2023",
      end: "Till now",
      description: "Creating and testing Websites",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Redux.js",
    "React Router",
    "Node.js",
    "Express.js",
    "Figma",
    "MongoDB",
  ],
  projects: [
    {
      title: "Gamezone",
      techStack: [
        "Side Project",
        "Javascript",
        "React.js",
        "Redux",
        "React Router",
      ],
      description: "A platform to search games, watch trailers, game screenshots",
      logo: ConsultlyLogo,
      link: {
        label: "gamezone.netlify",
        href: "https://diyarim123gamezone.netlify.app/",
      },
    },
    {
      title: "Kurd Movie",
      techStack: ["Side Project", "Javacript", "React.js", "Redux.js", "React Router"],
      description:
        "A platform to search movies by names and genres, watch movies and their trailers, descriptions and reviews, also recommendations",
      logo: MonitoLogo,
      link: {
        label: "kurdmovie.netlify",
        href: "https://kurdmovie.netlify.app/",
      },
    },
    {
      title: "CV Generator",
      techStack: ["Side Project", "React.js", "ANT Design", "Yup Schema", "Formik", "React PDF"],
      description:
        " a platform to build you CV",
      logo: JarockiMeLogo,
      link: {
        label: "cv-generatior.netlify",
        href: "https://cv-generator-vercel.netlify.app/",
      },
    },
    {
      title: "Portfolio",
      techStack: ["Side Project", "React.js", "Tailwind CSS"],
      description:
        "my personal website",
      logo: Minimal,
      link: {
        label: "diyari.netlify.app",
        href: "https://diyari.netlify.app/",
      },
    },
    {
      title: "Erbil Center",
      techStack: ["Team Work", "React.js", "React Router", "Zustand", "Firebase", "ShadCN", "Tailwind CSS"],
      description:
        "a website for Erbil Center",
      logo: BarepapersLogo,
      link: {
        label: "erbil-center.netlify",
        href: "https://ecw.web.app/departments",
      },
    }
  ],
} as const;
