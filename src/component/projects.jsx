import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "MERN Stack Projects",
    description: "Robust full-stack apps built with MongoDB, Express, React, and Node.js.",
    image: "/images/mern.svg",
    link: "mernprojects.html"
  },
  {
    title: "React + Tailwind CSS Projects",
    description: "Modern and responsive interfaces designed using React and Tailwind CSS.",
    image: "/images/react-tailwind.svg",
    link: "#react-tailwind"
  },
  {
    title: "JavaScript Projects",
    description: "Dynamic and engaging applications crafted with pure JavaScript.",
    image: "/images/javascript.svg",
    link: "#javascript"
  },
  {
    title: "HTML & CSS Projects",
    description: "Elegant, fast-loading static websites built with HTML & CSS.",
    image: "/images/html-css-combined.jpeg",
    link: "#html-css"
  }
];

const cardVariants = {
  hover: { scale: 1.05, boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.15)" },
  initial: { scale: 1 }
};

const ProjectsPage = () => {
  const handleCardClick = (link) => {
    window.location.href = link;
  };

  return (
    <>
      <motion.h1 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 0.5 }} className="my-20 text-center text-4xl text-white">
        PROJECTS
      </motion.h1>
      <motion.div className="min-h-screen bg-gray-900 p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            key={index}
            variants={cardVariants}
            whileHover="hover"
            className="cursor-pointer"
            onClick={() => handleCardClick(project.link)}
          >
            <div className="rounded-2xl shadow-md bg-gray-800 transition-all duration-300">
              <div className="p-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-contain bg-white rounded-lg mb-4 p-4"
                />
                <h2 className="text-xl font-bold text-white mb-2">{project.title}</h2>
                <p className="text-gray-300">{project.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default ProjectsPage;
