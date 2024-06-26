"use client";
import React from "react";
import ProjectPages from "@/Components/Sections/ProjectPages/ProjectPages";
const Project = () => {
  const project = {
    id: 8,
    name: "Jobber",
    type: "mobile",
    imageUrl: "/Images/mobile4.png",
  };

  return (
    <ProjectPages
      name={project.name}
      imageUrl={project.imageUrl}
      type={project.type}
    />
  );
};

export default Project;
