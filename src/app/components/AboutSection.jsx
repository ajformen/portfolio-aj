"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Frontend Development
          <br />
          - <span className="text-gray-500">Next.js, Angular, JavaScript, TypeScript, HTML/CSS, jQuery, Dart/Flutter</span>
        </li>
        <li>Backend Development
          <br />
          - <span className="text-gray-500">NestJS, ASP.Net, C#.NET, Node.js, Prisma, Python</span>
        </li>
        <li>Databases
          <br />
          - <span className="text-gray-500">MySQL, SQL Server Management Studio, MongoDB</span>
        </li>
        <li>DevOps & Containerization
          <br />
          - <span className="text-gray-500">Docker Desktop, WSL2 (Windows Subsytem for Linux 2)</span>
        </li>
        <li>Version Control
          <br />
          - <span className="text-gray-500">Git</span>
        </li>
        <li>API Integration
          <br />
          - <span className="text-gray-500">Slack Webhook API</span>
        </li>
        <li>Other Technologies
          <br />
          - <span className="text-gray-500">Search Engine Optimization (SEO)</span>
        </li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Fishbulb Solutions Pty Ltd
          <br />
          - <span className="text-gray-500">May 2024 - Feb 2025</span>
        </li>
        <li>Software Developer at MLhuillier Financial Services
          <br />
          - <span className="text-gray-500">Mar 2023 - May 2024</span>
        </li>
        <li>Flutter Developer at Etousoft IT Solutions
          <br />
          - <span className="text-gray-500">Mar 2022 - Nov 2022</span>
        </li>
        <li>Survey Programmer at Dynata
          <br />
          - <span className="text-gray-500">Nov 2021 - Oct 2022</span>
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Certified Entry-Level JavaScript Programmer</li>
        <li>Entrepreneurship for All Massive Open Online Course</li>
        <li>Software Development Level 1 Competition</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>University of Cebu - Main Campus</li>
        <li>Asian College of Technology International Educational Foundation</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="about image" priority />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-justify">
            I am a skilled full-stack web developer with a strong passion for building dynamic and interactive web
            applications. With hands-on experience in technologies such as Angular, JavaScript, Next.js, NestJS,
            Node.js, MongoDB, MySQL, HTML, CSS, C# .NET, and Git, I thrive in creating efficient and scalable
            solutions. I am a fast learner, always eager to expand my technical expertise and stay updated with
            the latest trends. As a collaborative team player, I am excited to contribute to innovative projects and
            work alongside others to deliver exceptional applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;