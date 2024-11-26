import {
  problem,
    backend,
    frontend,
    learner,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    reactjsv,
    frontendd,
    backendd,
    bloging,
   Todolist,
    Currency,
    threejs,
  } from "../assets";
  
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
      title: "Frontend Developer",
      icon: frontend,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "ReactJS Developer",
      icon: learner,
    },
    {
      title: "Problem Solver",
      icon: problem,
    },
  ]    
  
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
      name: "TypeScript",
      icon: typescript,
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
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: " As An React.js Developer",
      icon: reactjsv,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
          "Built dynamic web applications, such as a responsive To-Do List application, leveraging reusable components and state management for seamless functionality",
        "Optimized user experiences by applying responsive design principles, ensuring cross-device compatibility",
"Maintained clean and scalable codebases by organizing project structures to enhance readability and scalability"
      ],
    },
    {
      title: " As An Frontend Developer",
      icon: frontendd,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developed responsive user interfaces for projects like a Currency Converter and Background Changer, focusing on interactivity and user experience",
"Built a Netflix Clone, replicating a modern, dynamic UI using HTML, CSS, and JavaScript to enhance design and functionality skills",
"Integrated creative layouts and responsive designs to ensure cross-browser and cross-device compatibility for all frontend applications",
      ],
    },
    {
      title: " As An Backend Developer",
      icon: backendd,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Designed and implemented a Blogging Application, focusing on RESTful APIs and dynamic data handling to create a user-friendly content management system",
"Built a URL Shortener service with efficient database integration to store and retrieve shortened URLs, ensuring high performance",
"Enhanced backend performance through optimized API endpoints and middleware to deliver seamless functionality across applications",
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
      name: "Blogging Application",
      description:
       "A web platform for creating, sharing, and managing blogs with ease, offering a user-friendly interface and secure backend for seamless content engagement.",
      tags: [
        {
          name: "ejs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
      ],
      image: bloging,
      source_code_link: "https://github.com/amank55",
    },
    {
      name: "Todolist",
      description:
        "A simple web app for managing daily tasks efficiently, allowing users to add, update, and track their to-dos with an intuitive interface.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
       
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: Todolist,
      source_code_link: "https://github.com/amank55",
    },
    {
      name: "Currency Convertor",
      description:
       "A web app for real-time currency conversion, enabling users to seamlessly calculate exchange rates between different currencies with an easy-to-use interface.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: Currency,
      source_code_link: "https://github.com/amank55",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };