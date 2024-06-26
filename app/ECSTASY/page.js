"use client";
import React from "react";
import ProjectPages from "@/Components/Sections/ProjectPages/ProjectPages";

const Project = () => {
  const project = {
    id: 4,
    name: "Ecstasy",
    type: "web",
    imageUrl: "/Images/web4.jpg",
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
