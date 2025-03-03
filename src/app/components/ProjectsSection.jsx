"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import {
    motion,
    useInView
} from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Next JS Portfolio Website",
    description: "My Portfolio Website using Next JS",
    image: "/images/portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://aj-formen.vercel.app/",
  },
  {
    id: 2,
    title: "E-commerce Admin Application",
    description: "An e-commerce admin and builder app",
    image: "/images/admin2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://jee-admin.vercel.app/",
  },
  {
    id: 3,
    title: "E-commerce Store Application",
    description: "An e-commerce store where you shop items",
    image: "/images/store3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://jee-store.vercel.app/",
  },
  {
    id: 4,
    title: "Linda Aetos",
    description: "A mobile financial app specific for team Aetos",
    image: "/images/linda.png",
    tag: ["All", "Mobile", "Work"],
    gitUrl: "/",
    previewUrl: "https://play.google.com/store/apps/details?id=etousoft.linda&hl=en&gl=US",
  },
  {
    id: 5,
    title: "MLShopBuilder",
    description: "An app where you build your store",
    image: "/images/builder.png",
    tag: ["All", "Web", "Work"],
    gitUrl: "/",
    previewUrl: "https://shop.mlhuillier.com/shopbuilder/",
  },
  {
    id: 6,
    title: "Jeebnb",
    description: "An airbnb-like app",
    image: "/images/jeebnb.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://jeebeenbee.vercel.app/",
  },
  {
    id: 7,
    title: "COCO Orange",
    description: "An insurance software system",
    image: "/images/coco-orange.png",
    tag: ["All", "Desktop", "Work"],
    gitUrl: "/",
    previewUrl: "",
  },
  {
    id: 8,
    title: "FishTix",
    description: "A ticketing system application",
    image: "/images/fishtix.png",
    tag: ["All", "Web", "Work"],
    gitUrl: "/",
    previewUrl: "https://fishtix.fishbulb.dev/account/login",
  },
  {
    id: 9,
    title: "Facebook Ads Portfolio",
    description: "A Dynamic Portfolio for the Facebook Ads Specialist",
    image: "/images/fb-ads-portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://jeecreative-fbads.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-1 md:gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Desktop"
          isSelected={tag === "Desktop"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Work"
          isSelected={tag === "Work"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 pl-5 pr-5 md:pl-14 md:pr-14 lg:pl-0 lg:pr-0">
        {filteredProjects
          .sort((a, b) => b.id - a.id)
          .map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
        {/* {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
          />
        ))} */}
      </ul>
    </section>
  );
};

export default ProjectsSection;