import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    nextjs,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    regex,
    threejs,
    upwork,
    fiverr,
    tiktok,
    ecomm,
    PhotoGallery
} from "@/public/assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Backend Developer",
        icon: mobile,
    },
    {
        title: "Front End Developer",
        icon: backend,
    },
    {
        title: "Figma to Code",
        icon: creator,
    },
];

const technologies = [
    {
        name: "Next.js ",
        icon: nextjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
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
        title: "React.js Developer",
        company_name: "IOTA SQUARE",
        icon: regex,
        iconBg: "#383E56",
        date: "July 2019 - December 2019",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full Stack Developer",
        company_name: "Upwork",
        icon: upwork,
        iconBg: "#E6DEDD",
        date: "May 2021 - Present",
        points: [
            "Developing and maintaining web applications using Next.js, Tailwind CSS, Typescript, Postgres SQL and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
            "Figma to Next.js and React.js using Tailwind CSS and Bootstrap or any other recommended CSS framework."
        ],
    },
    {
        title: "Full Stack Developer",
        company_name: "Fiverr",
        icon: fiverr,
        iconBg: "#383E56",
        date: "Oct 2022 - Present",
        points: [
            "Developing and maintaining web applications using Next.js, Tailwind CSS, Typescript, Postgres SQL and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
            "Figma to Next.js and React.js using Tailwind CSS and Bootstrap or any other recommended CSS framework."
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
        name: "Tiktok",
        hosted_link:"https://tiktik-chi.vercel.app/",
        description:
            "Social Media platform that allows users to search, upload, like and comment on videos. User can signin via Google and can manage his account.",
        tags: [
            {
                name: "react", 
                color: "blue-text-gradient", 
            },
            {
                name: "sanity",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
            {
                name: "typescript",
                color: "blue-text-gradient",
            }
        ],
        image: tiktok,
        source_code_link: "https://github.com/jawwad-ali/Tiktok",
    },
    {
        name: "Ecommerce",
        description:
            "Ecommerce application that enables users to buy products. A user can add products to cart and can checkout through stripe. User can signin through Google and Email and Password.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "typescript",
                color: "green-text-gradient",
            },
            {
                name: "sanity",
                color: "pink-text-gradient",
            },
            {
                name: "tailwind",
                color: "blue-text-gradient",
            }
        ],
        image: ecomm,
        hosted_link:"https://hackathon-beryl.vercel.app/",
        source_code_link: "https://github.com/jawwad-ali/hackathon-portfolio",
    },
    {
        name: "Photo Gallery",
        description:
            "A web application where user can upload image. Can add an image to album. User can like an image.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "cloudinary",
                color: "green-text-gradient",
            },
            {
                name: "typescript",
                color: "pink-text-gradient",
            },
            {
                name: "tailwind",
                color: "green-text-gradient",
            }
        ],
        image: PhotoGallery,
        hosted_link:"https://cloudinary-photo-gallery-app.vercel.app/",
        source_code_link: "https://github.com/jawwad-ali/cloudinary-photo-gallery-app",
    },
];

export { services, technologies, experiences, testimonials, projects };