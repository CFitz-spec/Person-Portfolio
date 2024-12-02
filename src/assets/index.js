//icons for Hero

import FacebookCircleLineIcon from "remixicon-react/FacebookBoxLineIcon";
import WhatsappIcon from "remixicon-react/WhatsappLineIcon";
import GithubLineIcon from "remixicon-react/GithubLineIcon";
import LinkedinLineIcon from "remixicon-react/LinkedinLineIcon";

export const heroIcons = [
  <FacebookCircleLineIcon key={1} />,
  <WhatsappIcon key={2} />,
  <GithubLineIcon key={3} />,
  <LinkedinLineIcon key={4} />,
];
export const iconUrl = [
  "https://www.facebook.com/cayman.fitzhugh",
  "https://web.whatsapp.com/",
  "https://github.com/CFitz-spec",
  "https://www.linkedin.com/in/cayman-fitzhugh-3017a7322/",
];

//About Me section

import GithubFillIcon from "remixicon-react/GithubFillIcon";
import Projector2LineIcon from "remixicon-react/Projector2LineIcon";
import UserSmileLineIcon from "remixicon-react/UserSmileLineIcon";

//Wow need to bump these numbers up! Make stuff to get a job! Get a job to make stuff!
export const aboutData = [
  {
    title: "Github Repos",
    amount: 10,
    icon: <GithubFillIcon />,
  },
  {
    title: "Successful Projects",
    amount: 7,
    icon: <Projector2LineIcon />,
  },
  {
    title: "Satisfied Clients",
    amount: 1, //Mia ❤ 🤣
    icon: <UserSmileLineIcon />,
  },
];

import DownloadLineIcon from "remixicon-react/DownloadLineIcon";
import ArrowLeftSFillIcon from "remixicon-react/ArrowLeftSFillIcon";

export const DownloadIcon = <DownloadLineIcon />;
export const ArrowLeftIcon = <ArrowLeftSFillIcon />;

export const aboutText = `
Dedicated educator turned full-stack developer with 5 years of experience in education. Recently completed Udemy's 2024 Web Development Bootcamp, gaining proficiency in JavaScript frameworks and Libraries, PostgresSQL, and Ubuntu and Motoko Web3 Technologies. Successfully implemented a personalized learning platform that increased student statisfaction by 30% using Edu-Apps. Passionate about leveraging technology to create innovative solutions and foster collaborative learning environments. Seeking a challenging full-stack developer role to apply my technical skills and educational background.`;
//end of about me

//Experience and Education Section

export const experienceData = [
  {
    year: "2025",
    title: "Bachelor's Degree",
    education: "Computing, IT, and Business Management",
    experience: [
      "Web, Mobile, and Cloud Technologies with a final IT project to be finished in 2025.",
      "Sustainable Enterprise and Innovation: Working within a collaborative virtual team to acheive entrepreneurial success in a complex and changing environment.",
    ],
  },

  {
    year: "2024",
    title: "Freelance developer",
    experience: [
      "Begun a career as a Freelance developer. Using websites such as Fiverr to post and market my skills and services to potential clients",
    ],
  },
  {
    year: "2024",
    title: "Web Development Bootcamp",
    education:
      "ES6, UI and UX web design, NodeJS, ExpressJS, React, PostgresSQL, RESTful APIs, OAuth 2.0, Motoko, and Web3 technologies.",
    experience: [
      "A 12-week bootcamp with hands-on self driven techincal projects.",
      "Projects include NFT Market Place, Personal Crypto Token, PERN stack Note-Taking App, and a Job-Searching Website.",
    ],
  },
  {
    year: "2018",
    title: "English Teacher",
    experience: [
      "Designed a curriculum roadmap to meet learning objectives.",
      "Introduced Edu-Apps and improved learner & parent satisfaction by 30%.",
      "Fostered social learning within the work team. Sharing resources, best practices, and innovations.",
    ],
  },
];

//skills section

/**
 * Skills brain storm
 * HTML CSS JS nextjs nodejs expressjs react GIMP POSTGRESSQL Git Framer Tailwind Bootstrap APIS Postman Visual Studio Ubuntu Motoko EJS 
Axios
 */

export const skillsData = [
  {
    name: "JS",
    icon: "/Assets/skills/js.png",
  },
  {
    name: "HTML",
    icon: "/Assets/skills/html.png",
  },
  {
    name: "CSS",
    icon: "/Assets/skills/css.png",
  },
  {
    name: "NextJs",
    icon: "/Assets/skills/nextjs.png",
  },
  {
    name: "NodeJs",
    icon: "/Assets/skills/nodejs.png",
  },
  {
    name: "ExpressJs",
    icon: "/Assets/skills/icon-expressjs.svg",
  },
  {
    name: "React",
    icon: "/Assets/skills/react.png",
  },
  {
    name: "GIMP",
    icon: "/Assets/skills/gimp.png",
  },
  {
    name: "PostgresSQL",
    icon: "/Assets/skills/postgresql.svg",
  },
  {
    name: "Git",
    icon: "/Assets/skills/git.svg",
  },
  {
    name: "Framer",
    icon: "/Assets/skills/framer.png",
  },
  {
    name: "Tailwind",
    icon: "/Assets/skills/tailwind.png",
  },
  {
    name: "Bootstrap",
    icon: "/Assets/skills/bootstrap-logo.svg",
  },
  {
    name: "Postman",
    icon: "/Assets/skills/postman.svg",
  },
  {
    name: "VS code",
    icon: "/Assets/skills/vscode.png",
  },
  {
    name: "Dfinity",
    icon: "/Assets/skills/dfinity.png",
  },
  {
    name: "Ubuntu",
    icon: "/Assets/skills/Ubuntu.svg",
  },
  {
    name: "Ejs",
    icon: "/Assets/skills/ejs.png",
  },
  {
    name: "Axios",
    icon: "/Assets/skills/axios.png",
  },
  {
    name: "GitHub",
    icon: "/Assets/skills/github.png",
  },
  {
    name: "Canva",
    icon: "/Assets/skills/Canva.png",
  },
  // {
  //   name: "AI",
  //   icon: "/Assets/skills/ai.png",
  // },
  {
    name: "Audacity",
    icon: "/Assets/skills/Audacity_Logo.svg",
  },
];

//reviews sections
/**
 * Okay so right now....
 * I don't have any reviews 😢
 * But I'm sure I'll have many five star reviews soon.
 * So I'll make them up for now using L-ipsum.
 * The animation will be cool anyway 🤣
 */

import StarFillIcon from "remixicon-react/StarFillIcon";
import StarHalfLineIcon from "remixicon-react/StarHalfLineIcon";
import ArrowLeftSLineIcon from "remixicon-react/ArrowLeftSLineIcon";
import ArrowRightSLineIcon from "remixicon-react/ArrowRightSLineIcon";

export const starIcons = [
  <StarFillIcon key={5} />,
  <StarHalfLineIcon key={6} />,
];
export const arrowIcons = [
  <ArrowLeftSLineIcon key={7} />,
  <ArrowRightSLineIcon key={8} />,
];

export const reviewData = [
  {
    image: `/Assets/reviews/client-1.png`,
    name: "Bob.B Lifestyle Blogger",
    comment: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Quas est error consectetur, minus iste eos. 
    Omnis laboriosam vitae temporibus laborum perspiciatis quas quia libero esse perferendis non, itaque est porro!`,

    stars: [1, 1, 1, 1, 1],
  },
  {
    image: `/Assets/reviews/client-2.png`,
    name: "Peter.T Freelance Graphic Designer",
    comment: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Quas est error consectetur, minus iste eos. 
    Omnis laboriosam vitae temporibus laborum perspiciatis quas quia libero esse perferendis non, itaque est porro!`,

    stars: [1, 1, 1, 1, 0.5],
  },
  {
    image: `/Assets/reviews/client-3.png`,
    name: "Jenny.P Bicycle Shop Owner",
    comment: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Quas est error consectetur, minus iste eos. 
    Omnis laboriosam vitae temporibus laborum perspiciatis quas quia libero esse perferendis non, itaque est porro!`,
    stars: [1, 1, 1, 1, 0.5],
  },
];

//projects section
export const projectData = [
  {
    name: "Shine",
    desc: `A Weather APP that uses React and Express to allow users to find out a city's weather, with the UI reacting to different weather types.`,
    url: "/Assets/projects/WeatherApp.PNG",
    tech: ["React", "ExpressJS", "CSS"],
  },
  {
    name: "Hired.com",
    desc: "A Job Searching Web App. Hired, Provides a list of jobs based on the search criteria and recommends a up-skiling course based on a keyword search.",
    url: "/Assets/projects/Hired.PNG",
    tech: ["BootStrap", "Ejs", "ExpressJS"],
  },
  {
    name: "DCAY",
    desc: "My own Digital Currency DCAY. Using Ubuntu, Dfinities's Motoko, and Web3 technologies. I was able to create my own Digital token",
    url: "/Assets/projects/DCayFaucet.PNG",
    tech: ["Dfinity", "React"],
  },
  {
    name: "OpenD",
    desc: "An NFT MarketPlace. Using my own Digital currency DCAY, users can buy, list, and sell their own NFTs",
    url: "/Assets/projects/OpenD.PNG",
    tech: ["Dfinity", "React"],
  },
  {
    name: "PortFolio website",
    desc: "My Portfolio website! Maybe this is cheating? But within this website I've used Nextjs for its routing and backend functionality and Framer-motion to provide the animation for each section.",
    url: "/Assets/projects/Portfolio.PNG",
    tech: ["React", "NextJS", "Tailwind", "Framer"],
  },
  {
    name: "Keeper",
    desc: "A note-taking App. Seeker uses React, ExpressJS, and PostgresSQL. This App allows users to create their own notes and save them into a database for persistance storage.",
    url: "/Assets/projects/Keeper.PNG",
    tech: ["Express", "React", "PostgresSQL", "CSS"],
  },
];

export const projectsButton = [
  "All",
  "React",
  "CSS",
  "Tailwind",
  "NextJS",
  "Framer",
  "ExpressJS",
  "Dfinity",
  "BootStrap",
];

//pricing plans info

export const pricingPlans = [
  {
    title: "Basic",
    pricing: "$500 - $1,000",
    features: [
      "Up to 5 pages",
      "Responsive design ",
      "Basic SEO ",
      "Contact form",
      "Social media links",
      "1 month support",
    ],
    recommended: "Small businesses, personal websites, bloggers",
  },
  {
    title: "Premium",
    pricing: "$5,000 - $10,000",
    features: [
      "Unlimited pages",
      "Responsive design",
      "Comprehensive SEO",
      "Contact form ",
      "Social media links",
      "Advanced security",
      "E-commerce (unlimited products)",
      "Blog setup",
      "6 months support",
    ],
    recommended: "Medium-sized businesses, online stores, service providers",
  },
  {
    title: "Standard",
    pricing: "$1,500 - $3,000",
    features: [
      "Up to 10 pages",
      "Responsive design",
      "Advanced SEO",
      "Contact form",
      "Social media links",
      "E-commerce (20 products)",
      "Blog setup",
      "3 months support",
    ],
    recommended:
      "Large businesses, complex e-commerce sites, custom web applications",
  },
];

import CheckLineIcon from "remixicon-react/CheckLineIcon";

export const checkIcon = <CheckLineIcon />;

//end of prices

//Questions section

import ArrowDropDownLineIcon from "remixicon-react/ArrowDropDownLineIcon";
export const questionArrow = <ArrowDropDownLineIcon />;

export const questions = [
  {
    question: "How do I get in touch with you?",
    answer:
      "You can use the contact me section above! Or get send me an Email directly at Cayman.fitzhugh@gmail.com. If you'd prefer you can check out my LinkedIn page by clicking the links at the top of the page.",
  },
  {
    question: "How much do you charge for your services?",
    answer:
      "I've just begun my journey into the world of web-development. This means my prices for my services are about as low as they will ever be! However, I'm expecting to increase my rate as I develop more commerical products. So get in touch sooner rather than later for the cheapest price",
  },
  {
    question: "How long will it take to build a website?",
    answer:
      "From 4 to 8 weeks from start to finish. This would be assuming all the necessary information and direction has been given and we come to a quick conclusion about what you want your website to be! The best thing to do, is just get in touch and we can talk about it",
  },
  {
    question:
      "So if you're brand new, why should I choose you instead of any other developer?",
    answer:
      "What will make me stand out is my range of skills that I can apply. I've a background in Business Management and before becoming a developer I was a Teacher, before that I was an Actor, and before that I worked as an outdoor adventure leader. No matter what the project is I'm going to be pulling on all of the skills and determination I've gotten from all of these fields to deliver you your best project",
  },
  {
    question: "How does this process work?",
    answer:
      "I'm new to this so it'll be an exciting adventure together! First, we'll have an inital contact phase. This is were we'll have a meeting to discuss your project and how I can best serve your needs. Afterwards, begins the research and project planning phase. This is were I'm going to try and put your vision into a reality by creating prototype designs and work to understand what the vision of the final product will be. Then comes the project research and developement phase. This is were we'll work closely together to shape and create the project as it's being built. Finally, the deployment and after service care. This is were we'll work together to add imporvements or make changes to the product to ensure my services have been the complete package.",
  },
  {
    question: "What else can you do?",
    answer:
      "I've very happy to discuss other projects that you think I might be suited to! Give me an email at cayman.fitzhugh@gmail.com and we can talk all about itS",
  },
];

//Navbar section

// import { PiCopyrightThin } from 'react-icons/pi'
import CopyrightLineIcon from "remixicon-react/CopyrightLineIcon";

// export const copyRightIcon = <PiCopyrightThin />
export const copyRightIcon = <CopyrightLineIcon />;

import Home5LineIcon from "remixicon-react/Home5LineIcon";
import UserLineIcon from "remixicon-react/UserLineIcon";
import HistoryLineIcon from "remixicon-react/HistoryLineIcon";
import BriefcaseLineIcon from "remixicon-react/BriefcaseLineIcon";
import UserStarLineIcon from "remixicon-react/UserStarLineIcon";
import ProjectorLineIcon from "remixicon-react/ProjectorLineIcon";
import PriceTag3LineIcon from "remixicon-react/PriceTag3LineIcon";
import ContactsBook2LineIcon from "remixicon-react/ContactsBook2LineIcon";
import QuestionAnswerLineIcon from "remixicon-react/QuestionAnswerLineIcon";

export const navbarData = [
  {
    id: "home",
    name: "Home",
    icon: <Home5LineIcon />,
  },
  {
    id: "about",
    name: "About",
    icon: <UserLineIcon />,
  },
  {
    id: "experience",
    name: "MyRoad",
    icon: <HistoryLineIcon />,
  },
  {
    id: "skills",
    name: "Skills",
    icon: <BriefcaseLineIcon />,
  },
  {
    id: "reviews",
    name: "Reviews",
    icon: <UserStarLineIcon />,
  },
  {
    id: "projects",
    name: "Projects",
    icon: <ProjectorLineIcon />,
  },
  {
    id: "pricing",
    name: "Pricing",
    icon: <PriceTag3LineIcon />,
  },
  {
    id: "contact",
    name: "Contact",
    icon: <ContactsBook2LineIcon />,
  },
  {
    id: "questions",
    name: "Questions",
    icon: <QuestionAnswerLineIcon />,
  },
];

//toggle section

import MoonFoggyFillIcon from "remixicon-react/MoonFoggyFillIcon";
import SunFoggyFillIcon from "remixicon-react/SunFoggyFillIcon";

export const sunIcon = <SunFoggyFillIcon />;
export const moonIcon = <MoonFoggyFillIcon />;
