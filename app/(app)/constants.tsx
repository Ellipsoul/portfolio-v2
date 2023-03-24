import { ChatBubbleLeftEllipsisIcon, EnvelopeIcon } from "@heroicons/react/20/solid";
import { ForwardRefExoticComponent, SVGProps } from "react";

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

// Intro Section Constants
export interface NavigationSocialItem {
  name: string;
  href: string;
  icon: any;
  class: string;
}

export const social: NavigationSocialItem[] = [
  {
    name: "Resume",
    href: "/Aron_Teh_Resume.pdf",
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 181.167 181.167"
        xmlSpace="preserve"
        {...props}
      >
        <path d="M148.556 0H32.613c-9.994 0-18.121 8.126-18.121 18.115v144.94c0 9.986 8.126 18.111 18.121 18.111h115.943c9.992 0 18.118-8.125 18.118-18.111V18.121C166.679 8.131 158.554 0 148.556 0zm10.875 163.055c0 5.996-4.878 10.871-10.875 10.871H32.613c-5.995 0-10.87-4.875-10.87-10.871V18.121c0-5.995 4.875-10.87 10.87-10.87h115.943c5.992 0 10.867 4.875 10.867 10.87v144.935h.008z" />
        <path d="M128.792 79.212H52.384a3.325 3.325 0 0 0-3.324 3.33 3.326 3.326 0 0 0 3.324 3.33h76.407a3.325 3.325 0 0 0 3.326-3.33 3.325 3.325 0 0 0-3.325-3.33zm0 15.174H52.384c-1.839 0-3.324 1.494-3.324 3.333s1.485 3.326 3.324 3.326h76.407a3.322 3.322 0 0 0 3.326-3.326 3.324 3.324 0 0 0-3.325-3.333zm0 15.169H52.384a3.327 3.327 0 0 0-3.324 3.331 3.323 3.323 0 0 0 3.324 3.328h76.407a3.324 3.324 0 0 0 3.326-3.328 3.327 3.327 0 0 0-3.325-3.331zm0 15.173H90.585c-1.836 0-3.328 1.488-3.328 3.327s1.492 3.333 3.328 3.333h38.206c1.841 0 3.321-1.494 3.321-3.333s-1.48-3.327-3.32-3.327zm0 29.965h-26.747a3.321 3.321 0 0 0-3.326 3.328 3.32 3.32 0 0 0 3.326 3.326h26.747a3.32 3.32 0 0 0 3.321-3.326 3.32 3.32 0 0 0-3.321-3.328zm-34.496-90.11c0-6.298-7.251-14.793-17.039-17.275 4.089-2.75 6.907-8.181 6.907-13.072 0-6.898-5.586-12.496-12.49-12.496-6.896 0-12.49 5.598-12.49 12.496 0 4.886 2.818 10.317 6.898 13.072-9.774 2.481-17.03 10.982-17.03 17.275.008 7.442 45.244 7.442 45.244 0zm-23.629-13.65h-.057l-2.068-2.375c1.011.358 2.042.577 3.133.577 1.093 0 2.125-.213 3.134-.572l-2.074 2.369h-.049l5.337 12.895-6.348 6.332-6.341-6.332 5.333-12.894z" />
      </svg>
    ),
    class: "w-12 h-12",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/aronteh/",
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"
          clipRule="evenodd"
        />
      </svg>
    ),
    class: "w-16 h-16",
  },
  {
    name: "GitHub",
    href: "https://github.com/ellipsoul",
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483
          0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608
          1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951
          0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337
          1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566
          4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
    class: "w-16 h-16",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/teharon/",
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506
        1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443
        2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
    class: "w-16 h-16",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/aron_teh",
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646
        4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27
        5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012
        18.407a11.616 11.616 0 006.29 1.84"
        />
      </svg>
    ),
    class: "w-16 h-16",
  },
];

// Timeline Section Constants
export interface TimelineItem {
  id: number;
  organisation: string;
  role: string;
  imageSrc: string;
  location: string;
  time: string;
  content: string[];
}

export const timeline: TimelineItem[] = [
  {
    id: 1,
    organisation: "Amazon",
    role: "Software Engineer",
    imageSrc: "/company_logos/amazon.png",
    location: "London, United Kingdom",
    time: "Nov 2022 - present",
    content: [
      "In my current position, I develop and test large-scale features for the Prime Video Living Room Platform.\
      I work primarily in TypeScript and React, but I receive exposure to a wide spectrum of internal and external\
      technologies.",
      // "My work can impact the experience of over 100 million Prime Video customers, so discipline and\
      // responsibility are built into my role. Strong communication and teamwork skills are also critical to my\
      // day-to-day performance.",
    ],
  },
  {
    id: 2,
    organisation: "THG",
    role: "Software Engineer",
    imageSrc: "/company_logos/thg.png",
    location: "United Kingdom",
    time: "Sep 2021 - Oct 2022",
    content: [
      "During my first full-time position, I performed full-stack engineering duties within a small team using Angular,\
      TypeScript, Java and GraphQL. My team was responsible for an Angular component library, as well as a Content\
      Management System that over 100 external clients used.",
    ],
  },
  {
    id: 3,
    organisation: "Imperial College London",
    role: "MEng Aeronautical Engineering",
    imageSrc: "/company_logos/imperial.png",
    location: "London, United Kingdom",
    time: "Sep 2017 - Jun 2021",
    content: [
      "My strong interest in mathematics and physics throughout high school inspired me to pursue Aerospace\
      Engineering. Today my degree bears no relation to my career, but the challenge of learning and\
      adapting rapidly to many difficult modules has set me up for success today.",
    ],
  },
  {
    id: 4,
    organisation: "Concordia International School Shanghai",
    role: "High School",
    imageSrc: "/company_logos/concordia.png",
    location: "Shanghai, China",
    time: "Aug 2013 - Jun 2017",
    content: [
      "An American high school in China is no ordinary education environment, but it gave way to the most diverse\
      group of peers I have ever been part of.",
      // "I pursued Advanced Placement examinations and scored 5 out of 5 in 9 subjects.",
    ],
  },
];

// Projects Section Constants
export interface Project {
  name: string;
  description: string;
  url: string;
  image: string;
}

export const projects: Project[] = [
  {
    name: "SkyStory",
    description:
      "A fully responsive, dynamically themed weather app offering live or forecast weather data for almost\
      any city worldwide. Powered by Firebase, authenticated users will have their historical\
      searches saved for easy access.",
    url: "https://skystory.aronteh.com/",
    image: "/project_logos/skystory.png",
  },
  {
    name: "NanoNote",
    description:
      "A lightweight, dual-themed and responsive notes application. Get started with one click,\
      and you will gain access to tools for creating, managing, sorting, and categorising an unlimited\
      number of sticky notes.",
    url: "https://nanonote.aronteh.com/",
    image: "/project_logos/nanonote.png",
  },
  {
    name: "TurboFile",
    description:
      "A no-setup-required tool for sharing files almost instantly. Authenticate users gain additional\
      features to view, download and manage uploaded files.",
    url: "https://turbofile.aronteh.com/",
    image: "/project_logos/turbofile.png",
  },
  {
    name: "Quiz App",
    description:
      "A multi-platform quiz app written with Flutter and Dart. Test your knowledge on various\
    programming topics, and track your progress to completion.",
    url: "https://quizapp.aronteh.com/",
    image: "/project_logos/quizapp.png",
  },
  {
    name: "Online Chat App",
    description:
      "A simple chat application where you can log in with a username and chat with all connected\
      users. Sadly, it was deprecated when Heroku dropped its free tier.",
    url: "https://github.com/Ellipsoul/online-chat-app",
    image: "/project_logos/onlinechat.png",
  },
  {
    name: "Travelling Salesman Problem Visualiser",
    description:
      "My first ever project! An interactive visualisation tool for the Travelling\
      Salesman Problem, with nine implemented algorithms.",
    url: "https://ellipsoul.github.io/Travelling-Salesman-Visualiser/",
    image: "/project_logos/tsp.png",
  },
];

// Interests Section Constants

export interface Interest {
  id: number;
  name: string;
  time: string;
  description: { id: number; content: string }[];
  logo: string;
  url: string;
}

export const interests: Interest[] = [
  {
    id: 1,
    name: "Chess",
    time: "19 years",
    description: [
      {
        id: 1,
        content:
          "I have played chess at a national and international level for more than 10 years. My greatest\
          achievement is winning the National Chess Championship in 2013 and becoming my country's youngest-ever\
          National Master.",
      },
      {
        id: 2,
        content: "Most recently, I have found great enjoyment in sharing my knowledge and experience with others.",
      },
      // {
      //   id: 3,
      //   content:
      //     "I think more people find out I play chess before they find out my name. Chess has been core to my life and\
      //     personality since I was a young child.",
      // },
    ],
    logo: "/interest_logos/chesscom.png",
    url: "https://www.chess.com/member/ellipsoul",
  },
  {
    id: 2,
    name: "Machine Learning",
    time: "1 year",
    description: [
      {
        id: 1,
        content:
          "The AI/ML hype train is leaving the station! Fortunately, my enthusiasm in mathematics, computer science\
          and endless pursuit of knowledge makes AI/ML the perfect side interest.",
      },
      {
        id: 2,
        content:
          "I love reading about and following the latest machine learning developments during my spare time. One day,\
          I will be competent enough to develop my own models.",
      },
    ],
    logo: "/interest_logos/huggingface.png",
    url: "https://huggingface.co/Ellipsoul/",
  },
];

// Contact Section Constants
export interface ContactButton {
  id: number;
  text: string;
  icon: ForwardRefExoticComponent<
    SVGProps<SVGSVGElement> & {
      title?: string | undefined;
      titleId?: string | undefined;
    }
  >;
  href: string;
}

export const contactButtons: ContactButton[] = [
  {
    id: 1,
    text: "Send me an Email",
    icon: EnvelopeIcon,
    href: "mailto:aronteh.chess@gmail.com?subject=Hello&body=Hi!",
  },
  {
    id: 2,
    text: "Find me on LinkedIn",
    icon: ChatBubbleLeftEllipsisIcon,
    href: "https://www.linkedin.com/in/aronteh/",
  },
];
