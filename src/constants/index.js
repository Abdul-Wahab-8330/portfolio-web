import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    spotify,
    news,
    docs,
    chatapp,
    threejs,
    bootstrap,
    canva,
    express,
    golive
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "skills",
        title: "Skills",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Frontend Developer",
        icon: web,
    },
    {
        title: "UI/UX Designer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
   
];

const experiences = [
    {
        title: "Frontend Developer",
        // company_name: "Starbucks",
        company_name: "React/Next...",
        icon: reactjs,
        iconBg: "#383E56",
        // date: "March 2020 - April 2021",
        date: "Ongoing...",
        points: [
            "Developing user interfaces with HTML, CSS, and JavaScript frameworks like React.js.",
            "Collaborating with designers and backend developers to create responsive and visually appealing websites.",
            "Ensuring cross-browser compatibility and optimizing performance for a seamless user experience.",
        ],
    },
    {
        title: "UI/UX Designer",
        // company_name: "Tesla",
        company_name: "Bootstrap/Figma...",
        icon:bootstrap ,
        iconBg: "#E6DEDD",
        // date: "March 2020 - April 2021",
        date: "Ongoing...",
        points: [
            "Designing intuitive and user-friendly interfaces by understanding user needs and business goals.",
            "Creating wireframes, prototypes, and visual designs while collaborating with developers to ensure accurate implementation.",
            "Continuously improving user experiences through feedback and research.",
        ],
    },
    {
        title: "Backend Developer",
        // company_name: "Shopify",
        company_name: "Express/Node....",
        // icon: shopify,
        icon: express,
        iconBg: "#383E56",
        // date: "March 2020 - April 2021",
        date: "Ongoing...",
        points: [
            "Building and maintaining server-side applications with technologies like Node.js, Express, or Appwrite.",
            "Ensuring data security, optimizing server performance, and integrating APIs with frontend components.",
            "Collaborating with frontend developers to provide efficient and scalable solutions.",
        ],
    },
    {
        title: "Content Creator",
        // company_name: "Meta",
        company_name: "Canva/Capcut...",
        // icon: meta,
        icon: canva,
        iconBg: "#E6DEDD",
        // date: "March 2020 - April 2021",
        date: "Ongoing...",
        points: [
            "Producing engaging content for various platforms including blogs, social media, and websites.",
            "Researching and brainstorming ideas to create high-quality written, visual, or video content.",
            "Collaborating with marketing teams to align content with brand messaging and goals.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Spotify",
        description:
            "A Web-based Music Player that allows users to listen latest music, providing a convenient environment and controls for all that music needs.",
        tags: [
            {
                name: "js",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: spotify,
        source_code_link: "https://github.com/Abdul-Wahab-8330/Spotify",
        live_link: "https://abdul-wahab-8330.github.io/Spotify/"
    },
    {
        name: "News Monkey",
        description:
            "Web application that enables users to watch for job latest news with different categories along with a decent structure and categories for every kind of news.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "api",
                color: "green-text-gradient",
            },
            {
                name: "bootstrap",
                color: "pink-text-gradient",
            },
        ],
        image: news,
        source_code_link: "https://github.com/Abdul-Wahab-8330/NewsMONKEY",
        live_link: "http://news-monkey-bice.vercel.app"
    },
    // {
    //     name: "Docs Animation",
    //     description:
    //         "A decent card animation made with framer motion that meets the professioal designing and animation requirements, user can drag and leave the card to have a feel like professional trending animations.",
    //     tags: [
    //         {
    //             name: "framerMotion",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "tailwind",
    //             color: "green-text-gradient",
    //         },
    //         {
    //             name: "css",
    //             color: "pink-text-gradient",
    //         },
    //     ],
    //     image: docs,
    //     source_code_link: "https://github.com/Abdul-Wahab-8330/docs-animation",
    //     live_link: "https://docs-animation.vercel.app/"
    // },
    {
        name: "Chat Application",
        description:
            "A Realtime chat application, using chat engine, provides seamless chat experience, join with admin's permission. Use Username: testuser, Password: 123456 to login.",
        tags: [
            {
                name: "chat-engine",
                color: "blue-text-gradient",
            },
            {
                name: "react",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: chatapp,
        source_code_link: "https://github.com/Abdul-Wahab-8330/Chat-app",
        live_link: "https://chat-application-nu-red.vercel.app/"
    }
];

export { services, technologies, experiences, testimonials, projects };