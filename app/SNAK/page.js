"use client";
import React from "react";
import ProjectPages from "@/Components/Sections/ProjectPages/ProjectPages";
const Project = () => {
  const project = {
    id: 14,
    name: "Snak ",
    type: "Artificial Inteligence",
    imageUrl: "/Images/ai5.png",
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
